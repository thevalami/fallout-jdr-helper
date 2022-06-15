import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';
import {Dice, ExpressionNode} from "dice-typescript";

@Component({
  templateUrl: 'item-details-expandable.page.html',
  styleUrls: ['item-details-expandable.page.scss'],
})
export class ItemDetailsExpandablePage {

  sections = [
    {
      label: "Dès de combats",
      opened: true,
      type: 'COMBATDICE'
    },
    {
      'label': "D20",
      'opened': false,
      type: 'D20DICE'
    }
  ];

  constructor(
    public navCtrl: NavController) {
  }

  toggleGroup(section: any) {
    section.opened = !section.opened;
  }


}
