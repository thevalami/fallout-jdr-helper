import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'trade'
})
export class TradePipe implements PipeTransform {
  transform(value: number, tradeModifier: number, mode: Mode): number {
    if (mode === "SELL") {
      return Math.floor(value * tradeModifier);
    } else {
      return Math.floor(value * (2 - tradeModifier));
    }
  }

}

export type Mode = 'SELL' | 'BUY';
