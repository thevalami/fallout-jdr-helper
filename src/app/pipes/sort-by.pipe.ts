import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(values: any[], property: string): any[] {
    return values.sort((a, b) => String(a[property]).localeCompare(String(b[property])));
  }

}
