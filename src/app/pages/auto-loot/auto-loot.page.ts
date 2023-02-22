import {Component, OnInit} from '@angular/core';
import {Dice} from "dice-typescript";
import {findMatchingDefinition, findMatchingLoot} from "../random-loot/loot-utils";
import {TranslateService} from "@ngx-translate/core";
import {LanguageService} from "../../shared/language.service";
import {Loot, LootDef, LOOTPLACES} from "../../data/loot-table/loot-table-lang";
import {ToastController} from "@ionic/angular";
import {findDataMatching} from "../../shared/data/data-type-matcher";

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
            if (objectRarity <= this.maxRarity) {
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
    const data = findDataMatching(this.languageService.getCurrentLanguage(), lootType);
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


  private reportMissingItem(lootType: string) {
    this.toastController.create({
      message: this.translateService.instant('GENERIC.MISSINGITEMDEF') + ' : ' + lootType,
      duration: 5000,
      position: 'bottom'
    }).then(toast => toast.present());
  }
}
