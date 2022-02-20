import {
  AbstractControl,
  ValidationErrors,
  AsyncValidatorFn,
} from '@angular/forms';
import { map, Observable } from 'rxjs';
import { AuthServiceService } from '../Services/auth-service.service';
import { IUser } from './../Models/iuser';

export function checkMailExist(user: AuthServiceService): AsyncValidatorFn {
  return (
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return user.getUsers(`?email=${control.value}`).pipe(
      map((users: IUser[]) => {
        return users?.length > 0 ? { emailExists: true } : null;
      })
    );
  };
}
