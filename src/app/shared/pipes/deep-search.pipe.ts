import { PipeTransform, Pipe } from "@angular/core";
import * as _ from "lodash/fp";
@Pipe({ name: "deepFilter" })
//https://medium.com/swlh/filtering-an-array-of-nested-objects-using-angular-pipes-d54bafd116f3
export class DeepSearchPipe implements PipeTransform {
  transform(items, searchDeepTerm) {
    if (searchDeepTerm) {
      let newsearchDeepTerm = !isNaN(searchDeepTerm)
        ? searchDeepTerm.toString()
        : searchDeepTerm.toString().toUpperCase();
      return items.filter((item) => {
        return this.lookForNestedObject(item, newsearchDeepTerm);
      });
    } else {
      return items;
    }
  }
  lookForNestedObject(item, newsearchDeepTerm) {
    let origItem = { ...item };
    let that = this;
    parseNestedObject(item);
    function parseNestedObject(item) {
      for (let key in item) {
        if (_.isPlainObject(item[key])) {
          if (origItem[key]) {
            delete origItem[key];
          }
          parseNestedObject(item[key]);
        } else {
          if (origItem[key]) {
            delete origItem[key];
          }
          origItem[key] = item[key];
        }
      }
    }
    return that.search(item, origItem, newsearchDeepTerm);
  }
  search(item, origItem, newsearchDeepTerm) {
    let filteredList = [];
    let prop = "";
    for (let koy in origItem) {
      prop = isNaN(origItem[koy])
        ? origItem[koy].toString().toUpperCase()
        : origItem[koy].toString();
      if (prop.indexOf(newsearchDeepTerm) > -1) {
        filteredList.push(item);
        return filteredList;
      }
    }
  }
}
