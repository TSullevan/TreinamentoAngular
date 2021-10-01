import { Component, OnInit } from '@angular/core';
import { InputModel } from 'src/app/shared/components/input/input.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public inputName: InputModel = new InputModel().asName().asRequired();

  public internalValue: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  public showInternalValue() {
    alert(this.internalValue);
  }

}
