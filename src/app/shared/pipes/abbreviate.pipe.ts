import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbreviate'
})
export class AbbreviatePipe implements PipeTransform {

  transform(fullName: string): string {
    if (!fullName) {
      return fullName;
    }
    let splitedFullName: string[] = fullName.trim().split(' ');
    let firstName: string = '';
    let middleName: string = '';
    let lastName: string = '';
    if (splitedFullName.length > 0) {
      firstName = splitedFullName[0];
    }
    if (splitedFullName.length > 1) {
      lastName = ' ' + splitedFullName[splitedFullName.length - 1];
    }
    if (splitedFullName.length > 2) {
      for (let i = 1; i < splitedFullName.length - 1; i++) {
        if (splitedFullName[i].length > 2) {
          middleName += ' ' + splitedFullName[i][0] + '.';
        }
        else if (splitedFullName[i].length > 0) {
          middleName += ' ' + splitedFullName[i];
        }
      }
    }

    return firstName + middleName + lastName;
  }

}
