import {Component, OnInit, ViewChild} from '@angular/core';
import {GenericDataSearchPipe} from "../../pipes/generic-data-search.pipe";
import {IonSearchbar} from "@ionic/angular";
import {DataId, REGISTERED_DATA_SECTIONS} from "../../data/generic-data-lang";
import {LanguageService} from "../../shared/language.service";
import {MOD_DEF, MODS_DATA_TABLE} from "../../data/mods/mod-lang";

@Component({
  selector: 'app-quick-search',
  templateUrl: './quick-search.page.html',
  styleUrls: ['./quick-search.page.scss'],
})
export class QuickSearchPage implements OnInit {

  searchText: string;
  definitions: DataId[];
  itemTypes: any[][];

  @ViewChild('searchBar', {static: false}) searchInput: IonSearchbar;

  constructor(private searchPipe: GenericDataSearchPipe, private languageService: LanguageService) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.searchInput.setFocus();
    }, 100);
  }

  searchItems() {
    if (this.searchText?.length >= 3) {
      this.definitions = [];
      this.itemTypes = [];
      for (let section of REGISTERED_DATA_SECTIONS[this.languageService.getCurrentLanguage()]) {
        for (let candidatedata of section.data) {
          const items = this.searchPipe.transform(candidatedata.data, this.searchText);
          if (items.length > 0) {
            this.definitions.push(candidatedata);
            this.itemTypes.push(items);
          }
        }
      }
      let translatedItems = MODS_DATA_TABLE[this.languageService.getCurrentLanguage()];
      for (let modType of Object.keys(translatedItems)) {
        const modEntries = translatedItems[modType];
        for (let moddedItem of Object.keys(modEntries.mods)) {
          let candidateMods = modEntries.mods[moddedItem];
          const matchingMods = this.searchPipe.transform(candidateMods, this.searchText);
          if (matchingMods.length > 0) {
            this.definitions.push({
              definition: MOD_DEF[this.languageService.getCurrentLanguage()],
              type: modType,
              label: modEntries.label + ' : ' + moddedItem,
              img: '',
              moddable: false,
              generic: true,
              data: []
            });
            this.itemTypes.push(matchingMods);
          }
        }
      }
    } else {
      this.definitions = [];
      this.itemTypes = [];
    }
  }
}
