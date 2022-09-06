import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataId, REGISTERED_DATA_SECTIONS, Section} from "../../data/generic-data";

@Component({
  selector: 'app-generic-data',
  templateUrl: './generic-data.page.html',
  styleUrls: ['./generic-data.page.scss'],
})
export class GenericDataPage implements OnInit {
  dataId: DataId;
  searchText = '';
  sortType: 'Name' | 'Rarity' = 'Name';

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const dataType = params['type'];
      this.dataId = GenericDataPage.findDefinitions(REGISTERED_DATA_SECTIONS, dataType);
    });
  }

  private static findDefinitions(sections: Section[], dataType: any): DataId {
    for (let section of sections) {
      for (let data of section.data) {
        if (data.type === dataType) {
          return data;
        }
      }
    }
  }

  sortTypeChanged($event: any) {
    this.sortType = $event.detail.value;
  }
}
