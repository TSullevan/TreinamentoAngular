import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pascalCase'
})
export class PascalCasePipe implements PipeTransform {

  transform(text: string): string {
    if (!text) {
      return text;
    }
    let splitedText: string[] = text.split(' ');
    let pascalCased: string = '';
    for (let i = 0; i < splitedText.length; i++) {
      if (splitedText[i].length > 0) {
        pascalCased += splitedText[i][0].toUpperCase() + splitedText[i].slice(1);
        if (i < splitedText.length - 1) {
          pascalCased += ' ';
        }
      }
    }
    return pascalCased;
  }
}
