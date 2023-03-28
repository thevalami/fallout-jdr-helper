import {Component, OnInit} from '@angular/core';
import {isWebContext} from "../../shared/context-utils";

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePage implements OnInit {

  ngOnInit(): void { /**/
  }

  isWebDevice() {
    return isWebContext();
  }
}
