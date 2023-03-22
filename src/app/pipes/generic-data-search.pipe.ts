import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'genericDataSearch'
})
export class GenericDataSearchPipe implements PipeTransform {

  transform(data: any[], searchtext: string): any[] {
    if (searchtext === '') {
      return data;
    } else {
      const filteredData = [];
      for (let candidateData of data) {
        let match = false;
        for (let key of Object.keys(candidateData)) {
          if (String(candidateData[key]).toLowerCase().includes(searchtext.trim().toLowerCase())) {
            match = true;
          }
        }
        if (match) {
          filteredData.push(candidateData);
        }
      }
      return filteredData;
    }
  }
}

@Pipe({
  name: 'genericTitleSearch'
})
export class GenericTitleSearchPipe implements PipeTransform {

  transform(data: any[], searchtext: string): any[] {
    if (searchtext === '') {
      return data;
    } else {
      const filteredData = [];
      for (let candidateData of data) {
        if (String(candidateData['Name']).toLowerCase().includes(searchtext.toLowerCase())) {
          filteredData.push(candidateData);
        }
      }
      return filteredData;
    }
  }
}
