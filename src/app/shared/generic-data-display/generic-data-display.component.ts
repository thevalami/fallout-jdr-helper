import {Component, Input, OnInit} from '@angular/core';
import {DataId, DataTableDefinition} from "../../data/generic-data";
import {ModalController} from "@ionic/angular";
import {ModsDisplayModalComponent} from "../mods-display-modal/mods-display-modal.component";

@Component({
  selector: 'app-generic-data-display',
  templateUrl: './generic-data-display.component.html',
  styleUrls: ['./generic-data-display.component.scss'],
})
export class GenericDataDisplayComponent implements OnInit {

  constructor(private modalCtrl: ModalController) {
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
}
