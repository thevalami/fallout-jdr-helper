import {Component, OnInit} from '@angular/core';
import {Dice} from "dice-typescript";
import {findMatchingDefinition, findMatchingLoot} from "./loot-utils";
import {LanguageService} from "../../shared/language.service";
import {Loot, LOOT_TABLE_INDEX, LootDef} from "../../data/loot-table/loot-table-lang";

@Component({
  selector: 'app-random-loot',
  templateUrl: './random-loot.page.html',
  styleUrls: ['./random-loot.page.scss'],
})
export class RandomLootPage implements OnInit {

  diceCount = 1;
  diceDefinition: string;
  lootType: string;
  lootTypes: LootDef[] = [];
  lootDiceResult: number[] = [];
  loots: Loot[];
  manualDices: any[] = [];

  constructor(private languageService: LanguageService) {
  }

  ngOnInit() {
    this.initScreen(this.languageService.getCurrentLanguage());
    this.languageService.getLanguage().subscribe(lang => {
      this.initScreen(lang);
    });
  }

  private initScreen(lang: string) {
    this.diceDefinition = LOOT_TABLE_INDEX[lang][0].dices;
    this.lootType = LOOT_TABLE_INDEX[lang][0].label;
    this.lootTypes = LOOT_TABLE_INDEX[lang];
    this.updateDiceCount();
  }

  generateRandomLoot() {
    this.loots = [];
    this.lootDiceResult = [];
    let matchingLootDef: LootDef = findMatchingDefinition(this.lootType, this.languageService.getCurrentLanguage());
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

  generateManualLoot() {
    this.loots = [];
    this.lootDiceResult = [];
    let matchingLootDef: LootDef = findMatchingDefinition(this.lootType, this.languageService.getCurrentLanguage());
    if (matchingLootDef != null) {
      this.manualDices.forEach(dice => {
        let loot = findMatchingLoot(dice.value, matchingLootDef);
        this.loots.push(loot);
        this.lootDiceResult.push(dice.value);
      });
    }
  }

  lootTypeChanged($event: any) {
    this.loots = [];
    this.lootDiceResult = [];
    this.lootType = $event.detail.value;
    const definition = findMatchingDefinition(this.lootType, this.languageService.getCurrentLanguage());
    if (definition != null) {
      this.diceDefinition = definition.dices;
    }
  }

  updateDiceCount() {
    this.manualDices = [];
    for (let i = 0; i < this.diceCount; i++) {
      this.manualDices.push({index: i, value: undefined});
    }
  }
}
