import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {ModsDisplayModalComponent} from "../mods-display-modal/mods-display-modal.component";
import {DataId, DataTableDefinition} from "../../data/generic-data-lang";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-generic-data-display',
  templateUrl: './generic-data-display.component.html',
  styleUrls: ['./generic-data-display.component.scss'],
})
export class GenericDataDisplayComponent implements OnInit {

  constructor(private modalCtrl: ModalController, private translate: TranslateService) {
  }

  ngOnInit() {
  }

  @Input() genericItems: any[];
  @Input() dataId: DataId;

  async openModModal(itemName) {
    const modal = await this.modalCtrl.create({
      component: ModsDisplayModalComponent,
      componentProps: {itemName: itemName, itemType: this.dataId.type}
    });
    await modal.present();
    await modal.onWillDismiss();
  }

  isOptional(column: DataTableDefinition, value: string) {
    return value && column.column.startsWith("Effect") && value === '';
  }

  getComponents(complexity: number): string {
    switch (complexity) {
      case 1:
        return this.translate.instant('JUNK.COMMON') + ' X2';
      case 2:
        return this.translate.instant('JUNK.COMMON') + ' X3';
      case 3:
        return this.translate.instant('JUNK.COMMON') + ' X4, ' + this.translate.instant('JUNK.UNCOMMON') + ' X2';
      case 4:
        return this.translate.instant('JUNK.COMMON') + ' X5, ' + this.translate.instant('JUNK.UNCOMMON') + ' X3';
      case 5:
        return this.translate.instant('JUNK.COMMON') + ' X6, ' + this.translate.instant('JUNK.UNCOMMON') + ' X4, ' + this.translate.instant('JUNK.RARE') + ' X2';
      case 6:
        return this.translate.instant('JUNK.COMMON') + ' X7, ' + this.translate.instant('JUNK.UNCOMMON') + ' X5, ' + this.translate.instant('JUNK.RARE') + ' X3';
      case 7:
        return this.translate.instant('JUNK.COMMON') + ' X8, ' + this.translate.instant('JUNK.UNCOMMON') + ' X6, ' + this.translate.instant('JUNK.RARE') + ' X4';
    }
  }
}
