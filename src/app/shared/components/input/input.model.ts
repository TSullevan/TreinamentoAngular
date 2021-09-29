export class InputModel {
    title: string = '';
    placeHolder: string = '';
    required: boolean = false;

    public asName(): InputModel {
        this.title = 'Nome';
        this.placeHolder = 'Digite seu nome';
        return this;
    }

    public asRequired(): InputModel {
        this.required = true;
        return this;
    }
}