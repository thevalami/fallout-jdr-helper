import {Component, OnInit} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@capacitor/splash-screen';
import {REGISTERED_DATA} from "./data/generic-data";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Accueil',
      url: ['/home'],
      icon: 'home',
      img: null,
    },
    {
      title: 'Dès',
      url: ['/dices'],
      icon: 'dice',
      img: null,
    },
    {
      title: 'Recherche rapide',
      url: ['/quick-search'],
      icon: 'search',
      img: null,
    }
  ];

  constructor(private platform: Platform) {
    for (let data of REGISTERED_DATA) {
      this.appPages.push({
        icon: null,
        img: data.img,
        url: ['/generic-data', data.type],
        title: data.label
      })
    }
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      SplashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
