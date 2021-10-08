export class ObjectModel {
    propertyName: string = '';
    propertyValue: string | File = '';

    constructor(propertyName: string, propertyValue: string | File) {
        this.propertyName = propertyName;
        this.propertyValue = propertyValue;
    }
}
