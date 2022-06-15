import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';
import {Dice, ExpressionNode} from "dice-typescript";

@Component({
  templateUrl: 'item-details-expandable.page.html',
  styleUrls: ['item-details-expandable.page.scss'],
})
export class ItemDetailsExpandablePage {

  groupStatus = {
    'COMBATDICE': true,
    'D20': false
  };

  combatDiceCount = 1;
  combatDiceChildren: ExpressionNode[] = [];

  constructor(
    public navCtrl: NavController) {
  }

  toggleGroup(group: string) {
    this.groupStatus[group] = !this.groupStatus[group];
  }

  public rollCombat(): void {
    const dice = new Dice();
    const combatDiceResults = dice.roll(String(this.combatDiceCount) + 'd6');
    this.combatDiceChildren = [];
    combatDiceResults.reducedExpression.forEachChild(child => {
      this.combatDiceChildren.push(child);
    });
  }
}
