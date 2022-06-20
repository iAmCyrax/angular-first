import { Pipe, PipeTransform } from '@angular/core';
import { startCase } from 'lodash';

@Pipe({
  name: 'supertitle'
})
export class SuperTitlePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): any {
    if (value) {
      return startCase(value);
    }
  }

}
