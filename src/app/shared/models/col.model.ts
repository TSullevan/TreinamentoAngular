import { InputModel } from "../components/input/input.model";

export class ColModel {
    class: string = 'col';
    input: InputModel = new InputModel();

    constructor(input: InputModel = new InputModel()) {
        this.input = input;
    }

    public setColSize(colSize: number): ColModel {
        this.class = 'col-' + colSize;
        return this;
    }
}
