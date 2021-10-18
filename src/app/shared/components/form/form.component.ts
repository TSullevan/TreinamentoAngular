import { Component, Input, OnInit } from '@angular/core';
import { ColModel } from '../../models/col.model';
import { RowModel } from '../../models/row.model';
import { HttpService } from '../../services/http.service';
import { FormModel } from './form.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() model: FormModel = new FormModel();

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  public send(): void {
    let fieldsOk: boolean = this.validateFields();
    if (fieldsOk) {
       let formData: object = this.model.getFormDataObject();
       this.model.sendMethod(formData).subscribe();
      // this.httpService.send(this.model.sendRoute, formData).subscribe();
      return;
    }
    alert('Alguns campos não foram preenchidos adequadamente.');
  }

  private validateFields(): boolean {
    let itsAllValid: boolean = true;
    this.model.rows.forEach((row: RowModel) => {
      row.cols.forEach((col: ColModel) => {
        col.input = col.input.removeBorderValidation();
        if (!col.input.blurValidation()) {
          itsAllValid = false;
          col.input = col.input.putBorderValidation();
        }
      });
    });
    return itsAllValid;
  }

}
