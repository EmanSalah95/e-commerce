import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { IUser } from './../../Models/iuser';
import { confirmMatchValidator } from './../../customValidators/matchConfirmValidator';
import { Router } from '@angular/router';
import { checkMailExist } from 'src/app/customValidators/validateNewMail';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass'],
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthServiceService,
    private _userService:UserService
  ) {
    this.registerForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(4)]],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern(
              /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
            ),
          ],
          // [checkMailExist(this.auth)]
        ],
        mobile: this.fb.array([
          this.fb.control('', [
            Validators.required,
            Validators.pattern(/^01[0125][0-9]{8}$/),
          ]),
        ]),
        address: this.fb.group({
          city: ['', [Validators.required]],
          street: ['', [Validators.required]],
          postalCode: ['', [Validators.required]],
        }),
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
            ),
          ],
        ],
        confirmPass: ['', [Validators.required]],
        delivery: ['', [Validators.required]],
        specificDayDel: [''],
      },
      { validators: confirmMatchValidator('advanced') }
    );
  }

  get name() {
    return this.registerForm.get('name');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get mobile() {
    return this.registerForm.get('mobile');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPass() {
    return this.registerForm.get('confirmPass');
  }

  get mobileNumbers() {
    return this.registerForm.get('mobile') as FormArray;
  }

  get city() {
    return this.registerForm.get('address.city');
  }

  get postal() {
    return this.registerForm.get('address.postalCode');
  }

  get street() {
    return this.registerForm.get('address.street');
  }

  get specificDayDel() {
    return this.registerForm.get('specificDayDel');
  }

  get delivery() {
    return this.registerForm.get('delivery');
  }

  onAdd() {
    this.mobileNumbers.push(
      this.fb.control('', [
        Validators.required,
        Validators.pattern(/^01[0125][0-9]{8}$/),
      ])
    );
  }

  onMinus(i: number) {
    this.mobileNumbers.removeAt(i);
  }

  toggleDaliveryValidation() {
    this.delivery?.value === 'specific'
      ? this.specificDayDel?.addValidators([Validators.required])
      : this.specificDayDel?.clearValidators();

    this.specificDayDel?.updateValueAndValidity();
  }

  onSubmit() {
    let user = this.registerForm.value;
    delete user.confirmPass;
    user = user as IUser;

    //  this.auth.addUser(user).subscribe(d=>console.log(d));
    this.auth.login(this.name?.value, this.password?.value);
    this._userService.signUp(user);
    this.router.navigate(['User']);
  }

  ngOnInit(): void {}
}
