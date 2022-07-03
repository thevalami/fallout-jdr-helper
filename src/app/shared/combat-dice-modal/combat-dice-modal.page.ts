import {Component, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-combat-dice-modal',
  templateUrl: './combat-dice-modal.page.html',
  styleUrls: ['./combat-dice-modal.page.scss'],
})
export class CombatDiceModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) {
  }

  ngOnInit() {
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
}
