import {Component} from '@angular/core';
import {Dice, DiceResult, ExpressionNode} from "dice-typescript";

@Component({
  selector: 'app-d20-dice',
  templateUrl: 'd20-dice-page.component.html',
  styleUrls: ['d20-dice-page.component.scss']
})
export class D20DicePage {

  d20Count = 2;
  d20Results: DiceResult | null = null;
  d20Children: ExpressionNode[] = [];

  constructor() {
    /**/
  }

  public rollD20(): void {
    const dice = new Dice();
    this.d20Results = dice.roll(String(this.d20Count) + 'd20');
    this.d20Children = [];
    this.d20Results.reducedExpression.forEachChild(child => {
      this.d20Children.push(child);
    });
  }

}
