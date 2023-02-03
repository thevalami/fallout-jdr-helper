import {Component, OnInit} from '@angular/core';
import {Dice} from "dice-typescript";
import {TranslateService} from "@ngx-translate/core";
import {LanguageService} from "../../shared/language.service";
import {ToastController} from "@ionic/angular";
import {Disease, DISEASES_INDEX} from "../../data/diseases/diseases-lang";

@Component({
  selector: 'app-diseases',
  templateUrl: './disease.page.html',
  styleUrls: ['./diseases.page.scss'],
})
export class DiseasesPage implements OnInit {

  diseases: Disease[] = [];
  randomDisease: Disease;

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
    this.diseases = DISEASES_INDEX[lang];
  }

  getRandomDisease() {
    this.randomDisease = null;
    const dice = new Dice();
    const d20DiceResult = dice.roll('1d20');
    this.randomDisease = this.diseases.find(value => value.Dice === d20DiceResult.total);
  }
}
