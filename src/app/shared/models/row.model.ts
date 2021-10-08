import { ColModel } from "./col.model";

export class RowModel {
    cols: Array<ColModel> = new Array<ColModel>();

    public addCol(newCol: ColModel): RowModel {
        this.cols.push(newCol);
        return this;
    }
}
