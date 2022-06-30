import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RichTextDisplayComponent} from "./rich-text-display/rich-text-display.component";
import {GenericDataDisplayComponent} from "./generic-data-display/generic-data-display.component";

@NgModule({
  declarations: [RichTextDisplayComponent, GenericDataDisplayComponent],
  exports: [RichTextDisplayComponent, GenericDataDisplayComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
