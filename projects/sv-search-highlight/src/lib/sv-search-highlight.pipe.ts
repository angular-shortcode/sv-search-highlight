import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'svSearchHighlight'
})
export class SvSearchHighlightPipe implements PipeTransform {
  transform(value: any, search: string): any {
    if (!value) {
      return;
    }
    const re = new RegExp(search, 'gi');
    const match = value.match(re);
    return search ? value.replace(re, `<mark>${match && match[0]}</mark>`) : value;
  }

}
