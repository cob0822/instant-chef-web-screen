import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { PageService } from '../../../shared/service/page.service';
import { PageType } from '../../../shared/enum/page-type';
import { AddGenreDialogService } from '../../../shared/dialog/add-genre-dialog/add-genre-dialog.service';
import { OrderService as ApiOrderService } from '../../../shared/api/order.service';
import { OrderFrequencyType, getOrderFrequencyTypeLabel } from '../../../shared/enum/order-frequency-type';
import { OrderDateType, getOrderDateTypeLabel} from '../../../shared/enum/order-date-type';
import { OrderRequest } from '../../../shared/model/order-request';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  providers: [DatePipe] 
})

export class OrderComponent implements OnInit {

  @ViewChild('form') private form: ElementRef;

  public PageTypeEnum = PageType;
  public OrderDateTypeEnum = OrderDateType;
  public _getOrderDateTypeLabel = getOrderDateTypeLabel;
  public OrderFrequencyTypeEnum = OrderFrequencyType;
  public _getOrderFrequencyTypeLabel = getOrderFrequencyTypeLabel;

  public isFocus: boolean = false;
  public isShow: boolean = false;

  public input: string;
  public selectedDateType: OrderDateType = OrderDateType.Detail;
  public searchedCategories: {id: number, name: string}[] = [];
  public requiredData: FormGroup;
  public creationTime: number | undefined = undefined;
  
  public selectedCategories: string[] = [];
  public activeList: string;
  public isSearching: boolean = false;
  
  private _toolFormValues: {id?: number, value?: string}[] = [];
  private _ingredientsFormValues: {id?: number, value?: string}[] = [];

  constructor(private formBuilder: FormBuilder,
              readonly page: PageService,
              readonly addGenre: AddGenreDialogService,
              private apiOrder: ApiOrderService,
              private datePipe: DatePipe) { }

  get title(): FormControl {
    return <FormControl>this.requiredData.get('title');
  }

  get description(): FormControl {
    return <FormControl>this.requiredData.get('description');
  }

  get dateType(): FormControl {
    return <FormControl>this.requiredData.get('dateType');
  }

  get date(): FormControl {
    return <FormControl>this.requiredData.get('date');
  }

  get frequency(): FormControl {
    return <FormControl>this.requiredData.get('frequency');
  }

  get toolFormValues(): {id?: number, value?: string}[]  {
    return this._toolFormValues;
  }

  set toolFormValues(formValues: {id?: number, value?: string}[]) {
    this._toolFormValues = formValues;
  }

  get ingredientsFormValues(): {id?: number, value?: string}[] {
    return this._ingredientsFormValues;
  }

  set ingredientsFormValues(formValues: {id?: number, value?: string}[]) {
    this._ingredientsFormValues = formValues;
  }

  ngOnInit(): void {
    this.requiredData = this.formBuilder.group({
      title: new FormControl(undefined, [Validators.required]),
      description: new FormControl(undefined, [Validators.required]),
      dateType: new FormControl(OrderDateType.Detail, [Validators.required]),
      date: new FormControl(undefined),
      frequency: new FormControl(OrderFrequencyType.AlwaysAsHobby),
    }, { validator: this.checkDateIsNullOrRequired });
  }

  public getErrorMessage(form: FormControl): string | undefined {
    let errorMessage = undefined;
    if(form.hasError('required') || form.hasError('requiredDate')) errorMessage = '入力は必須です';
    return errorMessage;
  }

  public onSearchCategory() {
    this.isSearching = true;
    this.searchedCategories = [];
    if(this.input && this.input.trim()) {
      this.apiOrder.searchCategory(this.input).subscribe(results => {
        this.searchedCategories = results;
        if(results.length > 0) this.activeList = this.searchedCategories[0].name;
        this.isSearching = false;
      });
    }
  }
  
  public addTag(searchedCategory: {id: number, name: string}) {
    this.input = undefined;
    if(!this.selectedCategories.includes(searchedCategory.name)) this.selectedCategories.push(searchedCategory.name);
  }

  public removeTag(selectedCategory: string) {
    this.selectedCategories = this.selectedCategories.filter(v => { return v !== selectedCategory});
  }

  public onFormFocus() {
    this.form.nativeElement.focus();
  }

  public removeInput() {
    this.input = undefined;
    this.searchedCategories = [];
  }

  public convertCreationTimeToInteger() {
    if(this.creationTime) {
      if(this.creationTime < 0) this.creationTime = this.creationTime * -1;
      this.creationTime = Math.floor(this.creationTime);
    }
  }

  public onSubmit() {
    let orderRequest: OrderRequest = {
      title: this.title.value,
      description: this.description.value,
      date: this.dateType.value == OrderDateType.Detail? this.datePipe.transform(this.date.value, 'yyyy/MM/dd') : OrderDateType.Always,
      frequency: this.frequency.value,
    }
  
    if(this.selectedCategories.length > 0 && !this.selectedCategories.includes(undefined)) {
      Object.assign(orderRequest, {categories: this.selectedCategories});
    }

    if(this.creationTime) Object.assign(orderRequest, {creation_time: this.creationTime});
    
    if(this.toolFormValues.length > 0) {
      let requestFormValues: string[] = this.getNotUndefinedValueOnFormValues(this.toolFormValues);
      if(requestFormValues.length > 0) Object.assign(orderRequest, {tool: requestFormValues});
    }

    if(this.ingredientsFormValues.length > 0) {
      let requestFormValues: string[] = this.getNotUndefinedValueOnFormValues(this.ingredientsFormValues);
      if(requestFormValues.length > 0) Object.assign(orderRequest, {ingredients: requestFormValues});
    }

    console.log(orderRequest);
  }

  private getNotUndefinedValueOnFormValues(formValues: {id?: number, value?: string}[]): string[] {
    let requestFormValues: string[] = [];

    formValues.forEach(formValue => {
      if(formValue.value) requestFormValues.push(formValue.value);
    });
    return requestFormValues;
  }

  private checkDateIsNullOrRequired(group: FormGroup): void {
    let dateType = group.controls.dateType.value;
    let date = group.controls.date.value;

    if(dateType == OrderDateType.Detail) {
      return  group.controls.date.setErrors(date? null : {requiredDate: true});
    }
    return  group.controls.date.setErrors(null);
  }
}
