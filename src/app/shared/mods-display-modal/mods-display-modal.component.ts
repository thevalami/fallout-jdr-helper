import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {DataId} from "../../data/generic-data-lang";
import {MOD_DEF, MODS_DATA_TABLE} from "../../data/mods/mod-lang";
import {LanguageService} from "../language.service";

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

  constructor(private modalCtrl: ModalController, private languageService: LanguageService) {
  }

  ngOnInit() {
    this.initScreen(this.languageService.getCurrentLanguage());
    this.languageService.getLanguage().subscribe(lang => {
      this.initScreen(lang);
    })
  }

  private initScreen(currentLanguage: string) {
    const matchingItems = MODS_DATA_TABLE[currentLanguage][this.itemType].mods;
    this.mods = matchingItems["*"] ? matchingItems["*"] : matchingItems[this.itemName] || [];
    this.dataId = {
      moddable: false,
      definition: MOD_DEF[currentLanguage],
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
