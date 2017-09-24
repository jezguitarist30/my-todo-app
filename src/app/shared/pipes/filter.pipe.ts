import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array, column, keyword): any {
    if (!Array.isArray(array) || !array) {
      return;
    }

    if (!column || column.trim() === '') {
      return array;
    }

    if (!keyword || keyword.trim() === '') {
      return array;
    }

    return Array.from(array).filter((value, index) => {
      return (value[column].toLowerCase().indexOf(keyword.toLowerCase()) >= 0);
    });
  }

}
