import {Component, OnInit} from '@angular/core';
import {Dice} from "dice-typescript";
import {findMatchingDefinition, findMatchingLoot} from "../random-loot/loot-utils";
import {TranslateService} from "@ngx-translate/core";
import {LanguageService} from "../../shared/language.service";
import {Loot, LOOT_CURIOSITIES_VALUABLES, LootDef, LOOTPLACES} from "../../data/loot-table/loot-table-lang";
import {ToastController} from "@ionic/angular";
import {COMMON_ROBOT_MODS} from "../../data/mods/mod-lang";
import {
  AMMUNITION_LOOT_DATA,
  CHEMS_LOOT_DATA,
  DOGARMOR_LOOT_DATA,
  DRINK_LOOT_DATA,
  ENERGYWEAPONS_LOOT_DATA,
  EXPLOSIVES_LOOT_DATA,
  FOOD_LOOT_DATA,
  HATS_LOOT_DATA,
  HEAVYWEAPONS_LOOT_DATA,
  LIGHTWEAPONS_LOOT_DATA,
  MELEEWEAPONS_LOOT_DATA,
  OUTFITS_LOOT_DATA,
  PROJECTILES_LOOT_DATA,
  ROBOTARMOR_LOOT_DATA,
  TOOLS_LOOT_DATA
} from "../../data/generic-data-lang";

@Component({
  selector: 'app-auto-loot',
  templateUrl: './auto-loot.page.html',
  styleUrls: ['./auto-loot.page.scss'],
})
export class AutoLootPage implements OnInit {

  places = [];
  placeSizes = [];

  selectedPlace = null;
  selectedSize = null;
  maxRarity = 3;
  lootTables: any[] = [];
  lootTypes: string[];
  lootQuantities: { [key: string]: number } = {};
  generatedLoots: { [key: string]: Loot[] } = {};

  displayLoot = false;

  constructor(private translateService: TranslateService, private languageService: LanguageService,
              private toastController: ToastController) {
  }

  ngOnInit() {
    this.initScreen(this.languageService.getCurrentLanguage());
    this.languageService.getLanguage().subscribe(lang => {
      this.initScreen(lang);
    });
  }

  initScreen(lang: string): void {
    this.places = Object.keys(LOOTPLACES[lang]);
    this.translateService.get("AUTOLOOT.SIZES.TINY").subscribe(() => {
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
    let translatedLoots = LOOTPLACES[this.languageService.getCurrentLanguage()];
    this.lootTables = translatedLoots[this.selectedPlace][this.selectedSize];
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
          let matchingLootDef: LootDef = findMatchingDefinition(lootType, this.languageService.getCurrentLanguage());
          if (matchingLootDef == null) {
            this.reportMissingItem(lootType);
            break;
          } else {
            const dice = new Dice();
            const diceResult = dice.roll(matchingLootDef.dices).total;
            let loot = findMatchingLoot(diceResult, matchingLootDef);

            const objectRarity = this.findObjectRarity(lootType, loot);
            if (objectRarity < this.maxRarity) {
              loots.push(loot);
            }
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
    let language = this.languageService.getCurrentLanguage();
    switch (lootType) {
      case 'Munitions':
      case 'Ammunitions':
        return [...AMMUNITION_LOOT_DATA[language]];
      case 'Drogues':
      case 'Chems':
        return [...CHEMS_LOOT_DATA[language]];
      case 'Vêtements':
      case 'Clothes':
        return [...OUTFITS_LOOT_DATA[language], ...HATS_LOOT_DATA[language]];
      case 'Cueillette':
      case 'Gathering':
        return [...FOOD_LOOT_DATA[language]];
      case 'Curiosités / Objets de valeur':
      case 'Curiosities / Valuables':
        return [...TOOLS_LOOT_DATA[language], ...ROBOTARMOR_LOOT_DATA[language], ...DOGARMOR_LOOT_DATA[language], ...LOOT_CURIOSITIES_VALUABLES[language], ...COMMON_ROBOT_MODS[language]];
      case 'Boissons':
      case 'Drinks':
        return [...DRINK_LOOT_DATA[language]];
      case 'Nourriture':
      case 'Food':
        return [...FOOD_LOOT_DATA[language]];
      case 'Armes de jet et explosifs':
      case 'Projectiles and explosives':
        return [...EXPLOSIVES_LOOT_DATA[language], ...PROJECTILES_LOOT_DATA[language]];
      case 'Armes à distance':
      case 'Ranged weapons':
        return [...ENERGYWEAPONS_LOOT_DATA[language], ...LIGHTWEAPONS_LOOT_DATA[language], ...HEAVYWEAPONS_LOOT_DATA[language]];
      case 'Armes de mêlée':
      case 'Melee weapons':
        return [...MELEEWEAPONS_LOOT_DATA[language]];
      case 'Distributeur Nuka-Cola':
      case 'Nuka-Cola vending machine':
        return [...DRINK_LOOT_DATA[language]];
      default:
        return [];
    }
  }

  private reportMissingItem(lootType: string) {
    this.toastController.create({
      message: this.translateService.instant('GENERIC.MISSINGITEMDEF') + ' : ' + lootType,
      duration: 5000,
      position: 'bottom'
    }).then(toast => toast.present());
  }
}
