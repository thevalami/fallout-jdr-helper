import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {MOD_DEF, MODS_TABLE_DATA} from "../../data/mods/mods-index";
import {DataId} from "../../data/generic-data";

@Component({
  selector: 'app-mods-display-modal',
  templateUrl: './mods-display-modal.component.html',
  styleUrls: ['./mods-display-modal.component.scss'],
})
export class ModsDisplayModalComponent implements OnInit {

  @Input() itemName: string;
  @Input() itemType: string;
  mods: any[];
  dataId: DataId;
  searchText = '';

  constructor(private modalCtrl: ModalController) {
  }

  ngOnInit() {
    const matchingItems = MODS_TABLE_DATA[this.itemType];
    this.mods = matchingItems["*"] ? matchingItems["*"] : matchingItems[this.itemName] || [];
    this.dataId = {
      moddable: false,
      definition: MOD_DEF,
      type: 'mod-' + this.itemType,
      data: [],
      generic: true,
      label: null,
    }
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
}
