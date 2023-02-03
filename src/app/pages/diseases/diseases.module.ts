import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DiseasesRoutingModule} from "./diseases-routing.module";
import {FormsModule} from "@angular/forms";
import {IonicModule} from "@ionic/angular";
import {SharedModule} from "../../shared/shared.module";
import {DiseasesPage} from "./diseases.page";

@NgModule({
  declarations: [DiseasesPage],
  imports: [
    CommonModule,
    DiseasesRoutingModule,
    FormsModule,
    IonicModule,
    SharedModule
  ]
})
export class DiseasesModule {
}
