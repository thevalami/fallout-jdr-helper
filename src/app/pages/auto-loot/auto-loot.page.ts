import {Component, OnInit} from '@angular/core';
import {LOOT_PLACES} from "../../data/loot-table/loot-places";
import {Loot, LootDef} from "../../data/loot-table/loot-table-index";
import {AMMUNITION_LOOT_DATA} from "../../data/munition-loot";
import {CHEMS_LOOT_DATA} from "../../data/chems-loot";
import {OUTFITS_LOOT_DATA} from "../../data/outfits-loot";
import {HATS_LOOT_DATA} from "../../data/hats-loot";
import {FOOD_LOOT_DATA} from "../../data/food-loot";
import {DRINK_LOOT_DATA} from "../../data/drink-loot";
import {EXPLOSIVES_LOOT_DATA} from "../../data/explosives-loot";
import {PROJECTILES_LOOT_DATA} from "../../data/projectiles-loot";
import {ENERGYWEAPONS_LOOT_DATA} from "../../data/energyweapons-loot";
import {LIGHTWEAPONS_LOOT_DATA} from "../../data/lightweapons-loot";
import {HEAVYWEAPONS_LOOT_DATA} from "../../data/heavyweapons-loot";
import {MELEEWEAPONS_LOOT_DATA} from "../../data/meleeweapons-loot";
import {Dice} from "dice-typescript";
import {findMatchingDefinition, findMatchingLoot} from "../random-loot/loot-utils";
import {ROBOTARMOR_LOOT_DATA} from "../../data/robot-armor-loot";
import {TOOLS_LOOT_DATA} from "../../data/tools-loot";
import {DOGARMOR_LOOT_DATA} from "../../data/dogarmor-loot";
import {LOOT_CURIOSITIES_VALUABLES} from "../../data/loot-table/loot-curiositiesvaluables";
import {COMMON_ROBOT_MODS} from "../../data/mods/mod-robot-armor";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-auto-loot',
  templateUrl: './auto-loot.page.html',
  styleUrls: ['./auto-loot.page.scss'],
})
export class AutoLootPage implements OnInit {

  places = Object.keys(LOOT_PLACES);
  placeSizes = [];

  selectedPlace = null;
  selectedSize = null;
  maxRarity = 3;

  lootTables: any[] = [];
  lootTypes: string[];
  lootQuantities: { [key: string]: number } = {};
  generatedLoots: { [key: string]: Loot[] } = {};

  displayLoot = false;

  constructor(private translateService: TranslateService) {
  }

  ngOnInit() {
    this.translateService.get("AUTOLOOT.SIZE").subscribe(() => {
      this.placeSizes = [
        this.translateService.instant("AUTOLOOT.SIZES.TINY"),
        this.translateService.instant("AUTOLOOT.SIZES.SMALL"),
        this.translateService.instant("AUTOLOOT.SIZES.AVERAGE"),
        this.translateService.instant("AUTOLOOT.SIZES.LARGE"),
      ];
      this.selectedPlace = this.places[0];
      this.selectedSize = this.placeSizes[0];

      this.fetchLootTables();
    });
  }

  fetchLootTables() {
    this.reset();
    this.lootQuantities = {};
    this.lootTables = LOOT_PLACES[this.selectedPlace][this.selectedSize];
    this.lootTypes = Object.keys(this.lootTables);
    for (let lootType of this.lootTypes) {
      this.lootQuantities[lootType] = this.lootTables[lootType].min;
    }
  }

  generateLoot() {
    this.generatedLoots = {};
    for (let lootType of this.lootTypes) {
      if (this.lootTables[lootType].max > 0) {
        const loots: Loot[] = [];
        const lootQuanty = this.lootQuantities[lootType];

        while (loots.length < lootQuanty) {
          let matchingLootDef: LootDef = findMatchingDefinition(lootType);
          const dice = new Dice();
          const diceResult = dice.roll(matchingLootDef.dices).total;
          let loot = findMatchingLoot(diceResult, matchingLootDef);

          const objectRarity = this.findObjectRarity(lootType, loot);
          if (objectRarity < this.maxRarity) {
            loots.push(loot);
          }
        }
        this.generatedLoots[lootType] = loots;
      }
    }
    this.displayLoot = true;
  }

  private findObjectRarity(lootType: string, loot: Loot): number {
    let objectRarity = 0;
    const lootName = loot.Loot;
    const data = this.findDataMatching(lootType);
    for (let candidate of data) {
      if (lootName.startsWith(candidate.Name)) {
        objectRarity = candidate.Rarity || 0;
        break;
      }
    }
    return objectRarity;
  }

  reset() {
    this.displayLoot = false;
    this.generatedLoots = {};
  }

  private findDataMatching(lootType: string): any[] {
    switch (lootType) {
      case 'Munitions':
        return [...AMMUNITION_LOOT_DATA];
      case 'Drogues':
        return [...CHEMS_LOOT_DATA];
      case 'Vêtements':
        return [...OUTFITS_LOOT_DATA, ...HATS_LOOT_DATA];
      case 'Cueillette':
        return [...FOOD_LOOT_DATA];
      case 'Curiosités / Objets de valeur':
        return [...TOOLS_LOOT_DATA, ...ROBOTARMOR_LOOT_DATA, ...DOGARMOR_LOOT_DATA, ...LOOT_CURIOSITIES_VALUABLES, ...COMMON_ROBOT_MODS];
      case 'Boissons':
        return [...DRINK_LOOT_DATA];
      case 'Nourritures':
        return [...FOOD_LOOT_DATA];
      case 'Armes de jet et explosifs':
        return [...EXPLOSIVES_LOOT_DATA, ...PROJECTILES_LOOT_DATA];
      case 'Armes à distance':
        return [...ENERGYWEAPONS_LOOT_DATA, ...LIGHTWEAPONS_LOOT_DATA, ...HEAVYWEAPONS_LOOT_DATA];
      case 'Armes de mêlée':
        return [...MELEEWEAPONS_LOOT_DATA];
      case 'Distributeur Nuka-Cola':
        return [...DRINK_LOOT_DATA];
      default:
        return [];
    }
  }
}
