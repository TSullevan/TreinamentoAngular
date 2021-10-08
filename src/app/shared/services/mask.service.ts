import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaskService {

  constructor() { }

  public noMask(text: string): string {
    return text;
  }

  public cellPhoneMask(value: string): string {
    if (!value) {
      return value;
    }
    let numbers: string = value.replace(/\D/g, "");
    value = numbers;
    if (numbers.length > 0) {
      value = '(' + numbers;
    }
    if (numbers.length > 2) {
      value = this.insertAt(value, ')', 3);
    }
    if (numbers.length > 2) {
      value = this.insertAt(value, ' ', 4);
    }
    if (numbers.length > 3) {
      value = this.insertAt(value, ' ', 6);
    }
    if (numbers.length > 7) {
      value = this.insertAt(value, '-', 11);
    }
    if (numbers.length > 11) {
      value = value.slice(0, 16);
    }
    return value;
  }

  private insertAt(text: string, character: string, index: number): string {
    return text.slice(0, index) + character + text.slice(index);
  }
}
