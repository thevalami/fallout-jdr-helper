import {Component, OnInit} from '@angular/core';
import {Loot, LOOT_TABLE_INDEX, LootDef} from "../../data/loot-table/loot-table-index";
import {Dice} from "dice-typescript";

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
    let matchingLootDef: LootDef = this.findMatchingDefinition(this.lootType);
    if (matchingLootDef != null) {
      for (let i = 0; i < this.diceCount; i++) {
        const dice = new Dice();
        const diceResult = dice.roll(matchingLootDef.dices).total;
        let loot = this.findMatchingLoot(diceResult, matchingLootDef);
        this.loots.push(loot);
        this.lootDiceResult.push(diceResult);
      }
    }
  }

  findMatchingDefinition(lootType: string): LootDef {
    let definition = null;
    for (let lootTypeDef of LOOT_TABLE_INDEX) {
      if (lootTypeDef.label === lootType) {
        definition = lootTypeDef;
      }
    }
    return definition;
  }

  findMatchingLoot(diceResult: number, lootDef: LootDef): Loot {
    let loot = null;
    for (let candidateData of lootDef.data) {
      if (String(candidateData.Dice).includes("-")) {
        let minDice: number = Number(String(candidateData.Dice).split("-")[0]);
        let maxDice: number = Number(String(candidateData.Dice).split("-")[1]);
        if (diceResult >= minDice && diceResult <= maxDice) {
          loot = candidateData;
        }
      } else {
        if (diceResult === candidateData.Dice) {
          loot = candidateData;
        }
      }
    }
    return loot;
  }

  lootTypeChanged($event: any) {
    this.loots = [];
    this.lootDiceResult = [];
    this.lootType = $event.detail.value;
    const definition = this.findMatchingDefinition(this.lootType);
    if (definition != null) {
      this.diceDefinition = definition.dices;
    }
  }
}
