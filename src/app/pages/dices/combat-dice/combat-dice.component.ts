import { Component, OnInit } from '@angular/core';
import {Dice, ExpressionNode} from "dice-typescript";

@Component({
  selector: 'app-combat-dice',
  templateUrl: './combat-dice.component.html',
  styleUrls: ['./combat-dice.component.scss'],
})
export class CombatDiceComponent implements OnInit {

  combatDiceCount = 1;
  combatDiceChildren: ExpressionNode[] = [];

  constructor() { }

  ngOnInit() {}

  public rollCombat(): void {
    const dice = new Dice();
    const combatDiceResults = dice.roll(String(this.combatDiceCount) + 'd6');
    this.combatDiceChildren = [];
    combatDiceResults.reducedExpression.forEachChild(child => {
      this.combatDiceChildren.push(child);
    });
  }

}
