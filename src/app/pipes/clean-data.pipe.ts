import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'cleanData'
})
export class CleanDataPipe implements PipeTransform {

  transform(value: any): string {
    return String(value).replace('$CD$', '');
  }

}
