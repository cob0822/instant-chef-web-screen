import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from './ui/ui.module';
import { DirectiveModule } from './directive/directive.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UiModule,
    DirectiveModule,
    HttpClientModule
  ],
  exports: [
    UiModule,
    DirectiveModule,
    HttpClientModule
  ],
})
export class ShareModule { }
