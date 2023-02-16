import {Component, OnInit} from '@angular/core';
import {Dice, ExpressionNode} from "dice-typescript";

@Component({
  selector: 'app-combat-dice',
  templateUrl: './combat-dice.component.html',
  styleUrls: ['./combat-dice.component.scss'],
})
export class CombatDiceComponent implements OnInit {

  combatDiceCount = 1;
  combatDiceChildren: ExpressionNode[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  public rollCombat(): void {
    const dice = new Dice();
    const combatDiceResults = dice.roll(String(this.combatDiceCount) + 'd6');
    this.combatDiceChildren = [];
    combatDiceResults.reducedExpression.forEachChild(child => {
      this.combatDiceChildren.push(child);
    });
  }

  public getDamageDetails(): any {
    const details = {
      'damages': 0,
      'effects': 0
    };
    this.combatDiceChildren.forEach(value => {
      const d6 = value.getAttribute('value')
      switch (d6) {
        case 1:
          details.damages += 1;
          break;
        case 2:
          details.damages += 2;
          break;
        case 5:
        case 6:
          details.damages += 1;
          details.effects += 1;
      }
    })
    return details;
  }
}
