import { Component, Input, OnInit } from '@angular/core';
import { ColModel, FormModel, RowModel } from './form.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() model: FormModel = new FormModel();

  constructor() { }

  ngOnInit(): void {
  }

  public send(): void {
    let fieldsOk: boolean = this.validateRequiredFields();
    if (fieldsOk) {
      // let formData: object = this.getFormDataObject(); //método para recuperar o objeto do formulário
      alert('Arquivo enviado!');//método de envio
      return;
    }
    alert('Alguns campos não foram preenchidos adequadamente.');
  }

  private validateRequiredFields(): boolean {
    let itsAllValid: boolean = true;
    this.model.rows.forEach((row: RowModel) => {
      row.cols.forEach((col: ColModel) => {
        col.input = col.input.removeBorderValidation();
        if (col.input.isRequired()) {
          itsAllValid = false;
          col.input = col.input.putBorderValidation();
        }
      });
    });
    return itsAllValid;
  }

}
