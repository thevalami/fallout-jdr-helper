import {Component} from '@angular/core';
import {Dice, ExpressionNode} from "dice-typescript";

@Component({
  selector: 'app-combat-dice',
  templateUrl: 'combat-dice-page.component.html',
  styleUrls: ['combat-dice-page.component.scss']
})
export class CombatDicePage {

  combatDiceCount = 1;
  combatDiceChildren: ExpressionNode[] = [];

  constructor() {
    /**/
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
