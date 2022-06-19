import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataId, DataTableDefinition, REGISTERED_DATA} from "../data/generic-data";

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
      const dataId = GenericDataPage.findDefinitions(REGISTERED_DATA, dataType);
      this.tableDefinitions = dataId.definition;
      this.genericData = dataId.data;
      this.title = dataId.label;
      this.img = dataId.img;
    });
  }

  private static findDefinitions(REGISTERED_DATA: DataId[], dataType: any): DataId {
    for (let registereddatum of REGISTERED_DATA) {
      if (registereddatum.type === dataType) {
        return registereddatum;
      }
    }
  }
}
