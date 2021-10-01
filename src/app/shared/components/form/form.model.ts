import { InputModel } from "../input/input.model";

export class FormModel {
    rows: Array<RowModel> = new Array<RowModel>();

    public asContact(): FormModel {
        this
            .addRow(new RowModel()
                .addCol(new ColModel().asName().asRequired())
                .addCol(new ColModel().asTelephone().setCol(3)))
            .addRow(new RowModel()
                .addCol(new ColModel().asEmail()));
        return this;
    }

    public addRow(newRow: RowModel): FormModel {
        this.rows.push(newRow);
        return this;
    }
}

export class RowModel {
    cols: Array<ColModel> = new Array<ColModel>();

    public addCol(newCol: ColModel): RowModel {
        this.cols.push(newCol);
        return this;
    }
}

export class ColModel {
    class: string = 'col';
    input: InputModel = new InputModel();

    public setInput(input: InputModel): ColModel {
        this.input = input;
        return this;
    }

    public setCol(colSize: number): ColModel {
        this.class = 'col-' + colSize;
        return this;
    }

    public asName(): ColModel {
        this.input = this.input.asName();
        return this;
    }

    public asTelephone(): ColModel {
        this.input = this.input.asTelephone();
        return this;
    }

    public asEmail(): ColModel {
        this.input = this.input.asEmail();
        return this;
    }

    public asRequired(): ColModel {
        this.input = this.input.asRequired();
        return this;
    }
}