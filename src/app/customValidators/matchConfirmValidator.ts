import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function confirmMatchValidator(advanced=''): ValidatorFn {
  return function (control: AbstractControl) : ValidationErrors | null {
      const password = control.get('password')?.value;
      const confirmPass = control.get('confirmPass')?.value;
      const name = control.get('name')?.value;

      let errors={};

      if (password && confirmPass) {
        if (password!== confirmPass) {
          errors={...errors, confirmError: true }
        }

        if (advanced) {
          let containsName=name&&confirmPass.includes(name);
          if(containsName)
              errors={...errors, containName: true }
        }

      }

      return password && confirmPass  ? errors : null;

    };

}

// export const confirmMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
//   const password = control.get('password');
//   const confirmPass = control.get('confirmPass');

//   return password && confirmPass && password.value !== confirmPass.value ? { confirmError: true } : null;
// };
