import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDesc',
})
export class ShortDescPipe implements PipeTransform {
  transform(value: string): string {
    return value.slice(0, 30) + '...';
  }
}
