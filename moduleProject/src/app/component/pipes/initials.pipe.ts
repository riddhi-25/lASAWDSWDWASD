import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  transform(value: string) {
    const text = value.split(' ');
    const initials = text.map(text => text.charAt(0).toUpperCase());
    return initials.join(' ');
    // return value.charAt(0).toUpperCase();
  }

}
