import { MaskService } from "../../services/mask.service";
import { ValidationService } from "../../services/validation.service";

export class InputModel {
    private maskService: MaskService = new MaskService();
    private validationService: ValidationService = new ValidationService();

    title: string = '';
    placeHolder: string = '';
    required: boolean = false;
    blurValidation: Function = this.blurValidationWithMethod;
    blurValidationMethod: Function = function () { return !this.isRequired(); };
    value: string = '';
    style: string = '';
    propertyName: string = '';
    mask: Function = this.maskWithMethod;
    maskMethod: Function = this.maskService.noMask;
    maxLength: number = 0;
    type: string = 'text';

    public setValue(value: string): InputModel {
        this.value = value;
        return this;
    }

    public blurValidationWithMethod() {
        return this.blurValidationMethod(this.value);
    }

    public maskWithMethod() {
        this.value = this.maskMethod(this.value);
    }

    public isRequired(): boolean {
        if (this.required && (this.value == '' || this.value == null || this.value == undefined)) {
            return true;
        }
        return false;
    }

    public asName(): InputModel {
        this.title = 'Nome';
        this.placeHolder = 'Digite seu nome';
        this.propertyName = 'Name';
        return this;
    }

    public asPassword(): InputModel {
        this.title = 'Senha';
        this.placeHolder = 'Digite sua Senha';
        this.propertyName = 'Password';
        this.type = 'password';
        return this;
    }

    public asTelephone(): InputModel {
        this.title = 'Telephone';
        this.placeHolder = '(00) 0 0000-0000';
        this.maskMethod = this.maskService.cellPhoneMask.bind(this.maskService);
        this.propertyName = 'Telephone';
        this.maxLength = 16;
        return this;
    }

    public asEmail(): InputModel {
        this.title = 'Email';
        this.placeHolder = 'Digite seu e-mail';
        this.blurValidationMethod = this.validationService.validateEmail.bind(this.validationService);
        this.propertyName = 'Email';
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
}
