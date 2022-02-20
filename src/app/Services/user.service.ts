import { Injectable } from '@angular/core';
import { IUser } from '../Models/iuser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: IUser = {
    id: '1',
    address: {
      city: 'cairo',
      postalCode: '1234Aa@',
      street: 'Al Haram',
    },
    delivery: 'any',
    email: 'eman.salah_95@yahoo.com',
    mobile: ['01127266565'],
    name: 'Eman Salah',
    password: '1234Aa@',
    specificDayDel: '',
  };

  constructor() {}

  signUp(obj: IUser) {
    this.user = { ...obj,id: Math.floor(Math.random()*100).toString() };
  }

  login(name:string){
    this.user.name=name;
    }

  getUser(): IUser {
    return this.user;
  }
}
