import { ColModel } from "../../models/col.model";
import { ObjectModel } from "../../models/object.model";
import { RowModel } from "../../models/row.model";

export class FormModel {
    rows: Array<RowModel> = new Array<RowModel>();

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
            const {propertyName, ...modelRest } = model;
            return { ...acumulator, [propertyName]: modelRest.propertyValue };
        }, {});
    }
}
