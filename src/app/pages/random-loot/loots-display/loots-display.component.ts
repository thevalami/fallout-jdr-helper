import {Component, Input, OnInit} from '@angular/core';
import {Loot} from "../../../data/loot-table/loot-table-index";

@Component({
  selector: 'app-loots-display',
  templateUrl: './loots-display.component.html',
  styleUrls: ['./loots-display.component.scss'],
})
export class LootsDisplayComponent implements OnInit {

  @Input() lootDiceResult: number[] = [];
  @Input() loots: Loot[];
  @Input() lootType: string;

  constructor() {
  }

  ngOnInit() {
  }

}
