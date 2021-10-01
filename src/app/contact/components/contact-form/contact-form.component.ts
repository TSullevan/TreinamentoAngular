import { Component, OnInit } from '@angular/core';
import { FormModel } from 'src/app/shared/components/form/form.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  public form: FormModel = new FormModel().asContact();

  constructor() { }

  ngOnInit(): void {
  }

}
