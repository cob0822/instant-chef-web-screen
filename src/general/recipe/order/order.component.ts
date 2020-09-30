import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from '../../../shared/service/page.service';
import { PageType } from '../../../shared/enum/page-type';
import { AddGenreDialogService } from '../../../shared/dialog/add-genre-dialog/add-genre-dialog.service';
import { MatInput } from '@angular/material/input';
import { OrderService as ApiOrderService } from '../../../shared/api/order.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  @ViewChild('form') form: ElementRef;
  @ViewChild('selectDateForm') selectDateForm: MatInput;

  PageTypeEnum = PageType;
  input: string;
  isFocus: boolean = false;
  isShow: boolean = false;
  selectedDateType: string = 'detail';
  _selectedInputs: string[] = [];
  _activeList: string;
  searchedCategories: {id: number, name: string}[] = [];
  _isSearching: boolean = false;

  get selectedInputs(): string[] {
    return this._selectedInputs;
  }

  set selectedInputs(inputs: string[]) {
    this._selectedInputs = inputs;
  }

  get url(): string {
    if(this.router.url == '/') return '/top/';
    return this.router.url;
  }

  get activeList() {
    return this._activeList;
  }

  set activeList(result: string) {
    this._activeList = result;
  }

  get isSearching() {
    return this._isSearching;
  }

  set isSearching(state: boolean) {
    this._isSearching = state;
  }

  constructor(private router: Router,
              readonly page: PageService,
              readonly addGenre: AddGenreDialogService,
              private apiOrder: ApiOrderService,
              private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
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
    if(!this.selectedInputs.includes(searchedCategory.name)) this.selectedInputs.push(searchedCategory.name);
  }

  public removeTag(selectedInput: string) {
    this.selectedInputs = this.selectedInputs.filter(v => { return v !== selectedInput});
  }

  public onFormFocus() {
    this.form.nativeElement.focus();
  }

  public onSelectDateFormFocus() {
    this.selectDateForm.focus();
  }

  public removeInput() {
    this.input = undefined;
    this.searchedCategories = [];
  }
}
