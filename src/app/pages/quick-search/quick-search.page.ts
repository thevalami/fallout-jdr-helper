import {Component, OnInit, ViewChild} from '@angular/core';
import {DataId, REGISTERED_DATA_SECTIONS} from "../../data/generic-data";
import {GenericTitleSearchPipe} from "../../pipes/generic-data-search.pipe";
import {IonSearchbar} from "@ionic/angular";

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

  constructor(private searchPipe: GenericTitleSearchPipe) {
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
      for (let section of REGISTERED_DATA_SECTIONS) {
        for (let candidatedata of section.data) {
          const items = this.searchPipe.transform(candidatedata.data, this.searchText);
          if (items.length > 0) {
            this.definitions.push(candidatedata);
            this.itemTypes.push(items);
          }
        }
      }
    } else {
      this.definitions = [];
      this.itemTypes = [];
    }
  }

}
