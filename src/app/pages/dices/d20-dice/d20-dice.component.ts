import {Component, OnInit} from '@angular/core';
import {Dice, DiceResult, ExpressionNode} from "dice-typescript";

@Component({
  selector: 'app-d20-dice',
  templateUrl: './d20-dice.component.html',
  styleUrls: ['./d20-dice.component.scss'],
})
export class D20DiceComponent implements OnInit {

  d20DiceCount = 2;
  d20DiceResult: DiceResult | null;
  d20DiceChildren: ExpressionNode[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  public rollD20(): void {
    const dice = new Dice();
    this.d20DiceResult = dice.roll(String(this.d20DiceCount) + 'd20');
    this.d20DiceChildren = [];
    this.d20DiceResult.reducedExpression.forEachChild(child => {
      this.d20DiceChildren.push(child);
    });
  }

}
