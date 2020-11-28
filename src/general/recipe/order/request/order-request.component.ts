import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { PageService } from '../../../../shared/service/page.service';
import { PageType } from '../../../../shared/enum/page-type';
import { AddGenreDialogService } from '../../../../shared/dialog/add-genre-dialog/add-genre-dialog.service';
import { OrderService as ApiOrderService } from '../../../../shared/api/order.service';
import { OrderFrequencyType, getOrderFrequencyTypeLabel } from '../../../../shared/enum/order-frequency-type';
import { OrderDateType, getOrderDateTypeLabel} from '../../../../shared/enum/order-date-type';
import { Order } from '../../../../shared/model/order';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-order',
  templateUrl: './order-request.component.html',
  styleUrls: ['./order-request.component.scss'],
  providers: [DatePipe] 
})

export class OrderRequestComponent implements OnInit {

  @ViewChild('form') private form: ElementRef;

  public PageTypeEnum = PageType;
  public OrderDateTypeEnum = OrderDateType;
  public _getOrderDateTypeLabel = getOrderDateTypeLabel;
  public OrderFrequencyTypeEnum = OrderFrequencyType;
  public _getOrderFrequencyTypeLabel = getOrderFrequencyTypeLabel;

  public isFocus: boolean = false;
  public isShow: boolean = false;
  public isUploading: boolean = false;
  public input: string;
  public selectedDateType: OrderDateType = OrderDateType.Detail;
  public searchedCategories: {id: number, name: string}[] = [];
  public requiredData: FormGroup;
  public creationTime: number | undefined = undefined;
  
  public selectedCategories: {id: number, name: string}[] = [];
  public activeList: string;
  public isSearching: boolean = false;
  
  private _toolFormValues: string[] = [];
  private _ingredientsFormValues: string[] = [];

  constructor(private formBuilder: FormBuilder,
              readonly page: PageService,
              readonly addGenre: AddGenreDialogService,
              private apiOrder: ApiOrderService,
              private router: Router,
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

  get toolFormValues(): string[] {
    return this._toolFormValues;
  }

  set toolFormValues(formValues: string[]) {
    this._toolFormValues = formValues;
  }

  get ingredientsFormValues(): string[] {
    return this._ingredientsFormValues;
  }

  set ingredientsFormValues(formValues: string[]) {
    this._ingredientsFormValues = formValues;
  }

  get today() {
    return new Date();
  }

  get orderRequest(): Order {
    let orderRequest: Order = {
      name: this.title.value,
      description: this.description.value,
      desired_date: this.dateType.value === OrderDateType.Detail? this.datePipe.transform(this.date.value, 'yyyy/MM/dd') : OrderDateType.Always,
      cooking_frequency: this.frequency.value,
    }
  
    if(this.selectedCategories.length > 0) orderRequest = {...orderRequest, ...{categories: this.selectedCategories}};

    if(this.creationTime) orderRequest = {...orderRequest, ...{creation_time: Number(this.creationTime)}};
    
    if(this.toolFormValues.length > 0) {
      orderRequest = {...orderRequest, ...{tool: this.toolFormValues}};
    }

    if(this.ingredientsFormValues.length > 0) {
      orderRequest = {...orderRequest, ...{ingredients: this.ingredientsFormValues}};
    }

    return orderRequest;
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
    if(!this.selectedCategories.find(v => v.id == searchedCategory.id)) this.selectedCategories.push(searchedCategory);
  }

  public removeTag(selectedCategory: {id: number, name: string}) {
    this.selectedCategories = this.selectedCategories.filter(v => { return v.id !== selectedCategory.id});
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
    this.isUploading = true;
    this.apiOrder.createOrder(this.orderRequest).subscribe( _ => {
      this.isUploading = false;
      alert('レシピ注文のアップロードが完了しました。');
      this.ngOnInit();
      this.router.navigate(['/recipes/order']);
    });
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
