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
  isTagVisible: boolean = false;
  isFocus: boolean = false;
  isShow: boolean = false;
  selectedDateType: string = 'detail';
  _selectedInputs: string[] = [];
  _activeList: string;
  results: string[] = ['日本料理', 'フランス料理', 'ドイツ料理', 'イタリア料理', 'タイ料理'];

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

  constructor(private router: Router,
              readonly page: PageService,
              readonly addGenre: AddGenreDialogService,
              private apiOrder: ApiOrderService,
              private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.activeList = this.results[0];
  }

  public onSearchCategory() {
    if(this.input && this.input.trim()) {
      this.apiOrder.searchCategory(this.input).subscribe(results => {
        console.log(results);
      });
    }
  }
  
  public addTag(result: string) {
    this.isTagVisible = true;
    this.input = undefined;
    if(!this.selectedInputs.includes(result)) this.selectedInputs.push(result);
    this.activeList = this.results[0];
  }

  public removeTag(selectedInput: string) {
    this.selectedInputs = this.selectedInputs.filter(v => { return v !== selectedInput});
    this.activeList = this.results[0];
  }

  public onFormFocus() {
    this.form.nativeElement.focus();
  }

  public onSelectDateFormFocus() {
    this.selectDateForm.focus();
  }
}
