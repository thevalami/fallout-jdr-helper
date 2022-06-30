import {Component, Input, OnInit} from '@angular/core';
import {DataTableDefinition} from "../../data/generic-data";

@Component({
  selector: 'app-generic-data-display',
  templateUrl: './generic-data-display.component.html',
  styleUrls: ['./generic-data-display.component.scss'],
})
export class GenericDataDisplayComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  @Input() definitions: DataTableDefinition[];
  @Input() genericItems: any[];

}
