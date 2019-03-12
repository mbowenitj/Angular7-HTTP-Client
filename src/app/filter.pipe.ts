import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Array<any>, term: any){
    if (Array.isArray(items) && items.length && term && term.length) {
      return items.filter(item => {
        let keys = Object.keys(item);
        if (Array.isArray(keys) && keys.length) {
          for (let key of keys) {
            if (item.hasOwnProperty(key) && item[key] && item[key].length && (item[key].toString().toLowerCase().replace(/ /g, '')).includes((term.toString().toLowerCase().replace(/ /g, '')))) {
              return true;
              }
          }
          return false;
        } else {
            return false;
          }
      });
    } else {
      return items;
    }
  }
}
  // transform(value: any[], term: string): any[] {
  //    return value.filter((x:any) => x.name.toLowerCase().startsWith(term.toLowerCase()) || x.email.toLowerCase().startsWith(term.toLowerCase()))
  //
  //  }
