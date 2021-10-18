import { Observable } from "rxjs";
import { ColModel } from "../../models/col.model";
import { ObjectModel } from "../../models/object.model";
import { RowModel } from "../../models/row.model";

export class FormModel {
    sendRoute: string = '';
    rows: Array<RowModel> = new Array<RowModel>();
    sendMethod: Function = this.sendMethodDefault;

    private sendMethodDefault(request: object): Observable<any> {
        return new Observable<any>();
    }

    public setSendRoute(sendRoute: string): FormModel {
        this.sendRoute = sendRoute;
        return this;
    }

    public setSendMethod(sendMethod: Function): FormModel {
        this.sendMethod = sendMethod;
        return this;
    }

    public addRow(newRow: RowModel): FormModel {
        this.rows.push(newRow);
        return this;
    }

    public getFormDataObject(): object {
        let data: object = {};
        let inputs: Array<ObjectModel> = new Array<ObjectModel>();

        this.rows.forEach((row: RowModel) =>
            row.cols.forEach((col: ColModel) =>
                inputs.push(new ObjectModel(col.input.propertyName, col.input.value || ''))
            )
        );
        data = this.arrayToObject(inputs);
        return data;
    }

    private arrayToObject(models: Array<ObjectModel>) {
        return models.reduce((acumulator, model: ObjectModel) => {
            const { propertyName, ...modelRest } = model;
            return { ...acumulator, [propertyName]: modelRest.propertyValue };
        }, {});
    }
}
