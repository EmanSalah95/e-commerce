import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/Models/iuser';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
  user:IUser

  constructor( private _userService:UserService) {   
    this.user=_userService.getUser();
  }

  ngOnInit(): void {
    
  }

}
