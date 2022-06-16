import {Pipe, PipeTransform} from '@angular/core';
import {ExpressionNode} from "dice-typescript";

@Pipe({
  name: 'diceDetails'
})
export class DiceDetailsPipe implements PipeTransform {

  transform(diceChildren: ExpressionNode[]): string {
    let output = '';
    for (let i = 0; i < diceChildren.length; i++) {
      output += diceChildren[i].getAttribute('value');
      if (i < diceChildren.length - 1) {
        output += ' + ';
      }
    }
    return output;
  }

}
