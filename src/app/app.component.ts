import {Component, OnInit} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@capacitor/splash-screen';
import {REGISTERED_DATA_SECTIONS, Section} from "./data/generic-data";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public sections: Section[] = [];

  constructor(private platform: Platform) {
    this.sections.push({
      label: "Aides de jeu",
      data: [
        {
          label: 'Accueil',
          type: 'home',
          icon: 'home',
          data: [],
          definition: [],
          generic: false
        },
        {
          label: 'Dès',
          type: 'dices',
          icon: 'dice',
          data: [],
          definition: [],
          generic: false
        },
        {
          label: 'Recherche rapide',
          type: 'quick-search',
          icon: 'search',
          data: [],
          definition: [],
          generic: false
        }
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

  ngOnInit() {

  }
}
