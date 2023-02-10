import {Component, OnInit} from '@angular/core';
import {Capacitor} from "@capacitor/core";

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePage implements OnInit {

  ngOnInit(): void { /**/
  }

  isWebContext() {
    return !Capacitor.isNativePlatform();
  }
}
