import {Component, OnInit} from '@angular/core';
import {Loot, LOOT_TABLE_INDEX, LootDef} from "../../data/loot-table/loot-table-index";
import {Dice} from "dice-typescript";
import {findMatchingDefinition, findMatchingLoot} from "./loot-utils";

@Component({
  selector: 'app-random-loot',
  templateUrl: './random-loot.page.html',
  styleUrls: ['./random-loot.page.scss'],
})
export class RandomLootPage implements OnInit {

  diceCount = 1;
  diceDefinition: string = LOOT_TABLE_INDEX[0].dices;
  lootType: string = LOOT_TABLE_INDEX[0].label;
  lootTypes: LootDef[] = LOOT_TABLE_INDEX;
  lootDiceResult: number[] = [];
  loots: Loot[];

  constructor() {
  }

  ngOnInit() {
  }

  generateRandomLoot() {
    this.loots = [];
    this.lootDiceResult = [];
    let matchingLootDef: LootDef = findMatchingDefinition(this.lootType);
    if (matchingLootDef != null) {
      for (let i = 0; i < this.diceCount; i++) {
        const dice = new Dice();
        const diceResult = dice.roll(matchingLootDef.dices).total;
        let loot = findMatchingLoot(diceResult, matchingLootDef);
        this.loots.push(loot);
        this.lootDiceResult.push(diceResult);
      }
    }
  }

  lootTypeChanged($event: any) {
    this.loots = [];
    this.lootDiceResult = [];
    this.lootType = $event.detail.value;
    const definition = findMatchingDefinition(this.lootType);
    if (definition != null) {
      this.diceDefinition = definition.dices;
    }
  }
}
