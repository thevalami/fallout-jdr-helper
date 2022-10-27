import {Component, OnInit} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@capacitor/splash-screen';
import {DataId, REGISTERED_DATA_SECTIONS, Section} from "./data/generic-data";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public sections: Section[] = [];
  public currentLanguage = 'fr';

  constructor(private platform: Platform, private translate: TranslateService) {
    translate.setDefaultLang(this.currentLanguage);
    translate.use(this.currentLanguage);
  }

  ngOnInit() {
    this.translate.get('APP.TITLE').subscribe(() => {
      this.buildNavigation();
      this.initializeApp();
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      SplashScreen.hide();
    });
  }

  private buildMenu(labelKey, type, icon): DataId {
    return {
      label: this.translate.instant('APP.MENU.' + labelKey),
      type: type,
      icon: icon,
      data: [],
      definition: [],
      generic: false,
      moddable: false
    }
  }

  private buildNavigation() {
    this.sections = [];
    console.log(this.translate.instant('APP.SECTIONS.MAIN'));
    this.sections.push({
      label: this.translate.instant('APP.SECTIONS.MAIN'),
      data: [
        this.buildMenu('HOME', 'home', 'home'),
        this.buildMenu('DICE', 'dices', 'dice'),
        this.buildMenu('QUICKSEARCH', 'quick-search', 'search'),
        this.buildMenu('RANDOMBOOKS', 'books', 'book'),
        this.buildMenu('RANDOMLOOT', 'random-loot', 'shuffle'),
        this.buildMenu('AUTOLOOT', 'auto-loot', 'bag-handle-outline'),
        this.buildMenu('ANDROIDVERSION', 'getandroid', 'logo-android'),
      ]
    });
    this.sections = [...this.sections, ...REGISTERED_DATA_SECTIONS];
  }

  changeLanguage(event) {
    this.currentLanguage = event.detail.value;
    this.translate.use(this.currentLanguage).subscribe(() => {
      this.buildNavigation();
    });
  }
}
