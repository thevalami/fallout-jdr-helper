import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {CombatDiceModalPage} from "../combat-dice-modal/combat-dice-modal.page";

@Component({
  selector: 'app-rich-text-display',
  templateUrl: './rich-text-display.component.html',
  styleUrls: ['./rich-text-display.component.scss'],
})
export class RichTextDisplayComponent implements OnInit {
  @Input() propertyText: string;

  constructor(private modalCtrl: ModalController) {
  }

  ngOnInit() {
  }

  async openCombatDiceModal() {
    const modal = await this.modalCtrl.create({
      component: CombatDiceModalPage,
    });
    await modal.present();
    await modal.onWillDismiss();
  }
}
