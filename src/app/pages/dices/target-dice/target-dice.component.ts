import {Component, OnInit} from '@angular/core';
import {Dice, DiceResult} from "dice-typescript";
import {EnemyType, TARGET_TYPE_TADA} from "../../../data/target-type-damage";

@Component({
  selector: 'app-target-dice',
  templateUrl: './target-dice.component.html',
  styleUrls: ['./target-dice.component.scss'],
})
export class TargetDiceComponent implements OnInit {

  ennemyType: EnemyType = "HUMAN";
  targetDiceResult: DiceResult | null;
  target: string = '';

  constructor() {
  }

  ngOnInit() {
  }

  public rollTarget(): void {
    const dice = new Dice();
    this.targetDiceResult = dice.roll('1d20');
    const targetDataType = TARGET_TYPE_TADA[this.ennemyType];
    for (let key of Object.keys(targetDataType)) {
      const min = Number(key.split('-')[0]);
      const max = Number(key.split('-')[1]);
      if (this.targetDiceResult.total >= min && this.targetDiceResult.total <= max) {
        this.target = targetDataType[key];
        break;
      }
    }
  }


  segmentChanged($event: any) {
    this.ennemyType = $event.detail.value;
    this.targetDiceResult = null;
  }
}
