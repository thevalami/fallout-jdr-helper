import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataId, DataTableDefinition, REGISTERED_DATA_SECTIONS, Section} from "../../data/generic-data";

@Component({
  selector: 'app-generic-data',
  templateUrl: './generic-data.page.html',
  styleUrls: ['./generic-data.page.scss'],
})
export class GenericDataPage implements OnInit {

  tableDefinitions: DataTableDefinition[] = [];
  genericData: any[];
  title: string;
  img: string;
  searchText = '';

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const dataType = params['type'];
      const dataId = GenericDataPage.findDefinitions(REGISTERED_DATA_SECTIONS, dataType);
      this.tableDefinitions = dataId.definition;
      this.genericData = dataId.data;
      this.title = dataId.label;
      this.img = dataId.img;
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
}
