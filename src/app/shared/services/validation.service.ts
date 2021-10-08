import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  public validateEmail(text: string): boolean {
    if (this.isEmptyNullOrUndefined(text)) {
      return true;
    }
    let signIndex: number = text.indexOf('@');
    let afterSign: string = text.substring(signIndex + 1);
    let dotIndex: number = afterSign.indexOf('.');
    let anotherSignIndex: number = afterSign.indexOf('@');

    if (signIndex > 0 && dotIndex > 0 && anotherSignIndex == -1) {
      return true;
    }
    return false;
  }

  private isEmptyNullOrUndefined(text: string): boolean {
    return text == '' || text == null || text == undefined;
  }
}
