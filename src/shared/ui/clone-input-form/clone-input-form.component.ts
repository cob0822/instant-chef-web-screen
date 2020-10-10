import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef, EmbeddedViewRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-clone-input-form',
  templateUrl: './clone-input-form.component.html',
  styleUrls: ['./clone-input-form.component.scss']
})
export class CloneInputFormComponent implements OnInit {

  @ViewChild('cloneContainer', {read:ViewContainerRef}) private cloneContainer: ViewContainerRef;
  @ViewChild('template') private template: TemplateRef<any>;
  @Input('formValues') public formValues: {id?: number, value: string}[];
  @Output('formValues') private _formValues: EventEmitter<{id?: number, value: string}[]> = new EventEmitter();

  private _cloneComponents: {id: number, component: EmbeddedViewRef<any>}[] = [];
  private id: number = 0;

  public inputValue: string;

  constructor() { }

  get cloneComponents() {
    return this._cloneComponents;
  }

  set cloneComponents(components: {id: number, component: EmbeddedViewRef<any>}[]) {
    this._cloneComponents = components;
  }

  ngOnInit(): void {
  }

  public cloneTemplate() {
    let cloneComponent = this.cloneContainer.createEmbeddedView(this.template, {$implicit: {value: this.inputValue, id: this.id}});
    this.cloneComponents.push({id: this.id, component: cloneComponent});
    this.inputValue = undefined;
    this.id++;
  }

  public removeTemplate(id: number) {
    let cloneComponent = this.cloneComponents.find(v => v.id == id)!.component;
    this.cloneContainer.remove(this.cloneContainer.indexOf(cloneComponent));
    this.cloneComponents = this.cloneComponents.filter(v => v.id != id);
    this.formValues = this.formValues.filter(v => v.id != id);
    this._formValues.emit(this.formValues);
  }

  public changeFormValues(id?: number, value?: string) {
    if(this.formValues.find(v => v.id == id)) {
      this.formValues.find(v => v.id == id)!.value = value? value : undefined;
    }else{
      if(this.formValues.find(v => v.id == this.id)) {
        this.formValues.find(v => v.id == this.id)!.value = this.inputValue? this.inputValue : undefined;
      }else{
        this.formValues.push({id: this.id, value: this.inputValue});
      }
    }
  }

}
