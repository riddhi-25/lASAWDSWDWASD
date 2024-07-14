import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(text:string,input:string) {
    if (text.includes(input)) {
      text = text.replaceAll(input, `<span class="highlight">${input}</span>`)
    }
    return text;
  }

}
