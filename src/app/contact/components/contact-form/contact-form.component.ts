import { Component, OnInit } from '@angular/core';
import { FormModel } from 'src/app/shared/components/form/form.model';
import { InputModel } from 'src/app/shared/components/input/input.model';
import { ColModel } from 'src/app/shared/models/col.model';
import { RowModel } from 'src/app/shared/models/row.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  public form: FormModel = new FormModel();

  constructor() {
    this.form
      .addRow(new RowModel()
        .addCol(new ColModel(new InputModel().asName().asRequired()))
        .addCol(new ColModel(new InputModel().asTelephone()).setColSize(3)))
      .addRow(new RowModel()
        .addCol(new ColModel(new InputModel().asEmail())));
  }

  ngOnInit(): void {
  }

}
