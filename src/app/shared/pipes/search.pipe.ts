import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(items: any, filter: any, defaultFilter?: boolean): any {
    if (!filter || !Array.isArray(items)) {
      return items;
    }
    if (filter && Array.isArray(items)) {
      let filterKeys = Object.keys(filter);
      let filterItems = items.filter((item) => {
          return filterKeys.some((keyName) => {
              return ( new RegExp(filter[keyName],'gi').test(item[keyName]) || filter[keyName] == '');          
          });  
      });
      return filterItems; 
    } 
  }
}
