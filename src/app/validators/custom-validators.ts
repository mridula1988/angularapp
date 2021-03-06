import { ValidationErrors, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';

export class CustomValidators {

    static passwordValidator(control: AbstractControl) {
        console.log("I am here");
        let password = control.value;
        console.log(password)
        if (password.length < 6) {
            console.log("error rcvd")
            return { passwordStrength: true };
        }
        let upperCaseCharacters = /[A-Z]+/g
        if (upperCaseCharacters.test(password) === false) {
            return { passwordStrength: 'Password does not contain upper case character' };
        }

        // let lowerCaseCharacters = /[a-z]+/g
        // if (lowerCaseCharacters.test(password) === false) {
        //     return { passwordStrength: 'Password does not contain lower case character' };
        // }

        // let numberCharacters = /[0-9]+/g
        // if (numberCharacters.test(password) === false) {
        //     return { passwordStrength: 'Password does not contain number' };
        // }

        // let specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
        // if (specialCharacters.test(password) === false) {
        //     return { passwordStrength: 'Password does not contain special character'};
        // } 
        return null;
    }
}
