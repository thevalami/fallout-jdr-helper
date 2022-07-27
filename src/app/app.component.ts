import {Component, OnInit} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@capacitor/splash-screen';
import {DataId, REGISTERED_DATA_SECTIONS, Section} from "./data/generic-data";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public sections: Section[] = [];

  constructor(private platform: Platform) {
  }

  ngOnInit() {
    this.sections.push({
      label: "Aides de jeu",
      data: [
        AppComponent.buildMenu('Accueil', 'home', 'home'),
        AppComponent.buildMenu('Dès', 'dices', 'dice'),
        AppComponent.buildMenu('Recherche rapide', 'quick-search', 'search'),
        AppComponent.buildMenu('Livre aléatoire', 'books', 'book'),
        AppComponent.buildMenu('Loot aléatoire', 'random-loot', 'shuffle'),
        AppComponent.buildMenu('Version Android', 'getandroid', 'logo-android'),
      ]
    });
    this.sections = [...this.sections, ...REGISTERED_DATA_SECTIONS];
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      SplashScreen.hide();
    });
  }

  private static buildMenu(label, type, icon): DataId {
    return {
      label: label,
      type: type,
      icon: icon,
      data: [],
      definition: [],
      generic: false,
      moddable: false
    }
  }
}
