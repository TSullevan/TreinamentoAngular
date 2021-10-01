export class InputModel {
    title: string = '';
    placeHolder: string = '';
    required: boolean = false;
    blurValidation: Function = function () { return !this.isRequired(); };
    value: string = '';
    style: string = '';
    mask: Function = function () { };

    public isRequired(): boolean {
        if (this.required && (this.value == '' || this.value == null || this.value == undefined)) {
            return true;
        }
        return false;
    }

    public asName(): InputModel {
        this.title = 'Nome';
        this.placeHolder = 'Digite seu nome';
        return this;
    }

    public asTelephone(): InputModel {
        this.title = 'Telephone';
        this.placeHolder = '(00) 0 0000-0000';
        this.mask = this.cellPhoneMask;
        return this;
    }

    public asEmail(): InputModel {
        this.title = 'Email';
        this.placeHolder = 'Digite seu e-mail';
        this.blurValidation = this.validateEmail;
        return this;
    }

    public asRequired(): InputModel {
        this.required = true;
        return this;
    }

    public putBorderValidation(): InputModel {
        this.style = 'border-color: red';
        return this;
    }

    public removeBorderValidation(): InputModel {
        this.style = '';
        return this;
    }

    private cellPhoneMask(): void {
        let numbers: string = this.value.replace(/\D/g, "");
        this.value = numbers;
        if (numbers.length > 0) {
            this.value = '(' + numbers;
        }
        if (numbers.length > 2) {
            this.value = this.insertAt(this.value, ')', 3);
        }
        if (numbers.length > 2) {
            this.value = this.insertAt(this.value, ' ', 4);
        }
        if (numbers.length > 3) {
            this.value = this.insertAt(this.value, ' ', 6);
        }
        if (numbers.length > 7) {
            this.value = this.insertAt(this.value, '-', 11);
        }
        if (numbers.length > 11) {
            this.value = this.value.slice(0, 16);
        }
    }

    private insertAt(text: string, character: string, index: number): string {
        return text.slice(0, index) + character + text.slice(index);
    }

    private isEmptyNullOrUndefined(): boolean {
        return this.value == '' || this.value == null || this.value == undefined;
    }

    private validateEmail(): boolean {
        if(this.isEmptyNullOrUndefined()) {
          return true;
        }
        let signIndex: number = this.value.indexOf('@');
        let afterSign: string = this.value.substring(signIndex + 1);
        let dotIndex: number = afterSign.indexOf('.');
        let anotherSignIndex: number = afterSign.indexOf('@');

        if(signIndex > 0 && dotIndex > 0 && anotherSignIndex == -1) {
            return true;
        }
        return false;
      }
}
