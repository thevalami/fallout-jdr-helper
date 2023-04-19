import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {IonicModule} from "@ionic/angular";
import {SharedModule} from "../../shared/shared.module";
import {MobLevelingRoutingModule} from "./mob-leveling-routing.module";
import {MobLevelingComponent} from "./mob-leveling/mob-leveling.component";
import {CreatureLevelingComponent} from "./creature-leveling/creature-leveling.component";
import {CharacterLevelingComponent} from "./character-leveling/character-leveling.component";

@NgModule({
  declarations: [MobLevelingComponent, CreatureLevelingComponent, CharacterLevelingComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    MobLevelingRoutingModule,
    NgOptimizedImage
  ]
})
export class MobLevelingModule {
}
