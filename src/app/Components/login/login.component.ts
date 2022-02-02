import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  constructor(private loginAuth: AuthServiceService ,
     private router: Router ,private location:Location, private activRouter: ActivatedRoute,
     ) {}
  ngOnInit(): void {
    console.log("log",this.activRouter); //get current url
  }

  loginHandler(username: string, password: string) {
    this.loginAuth.login(username, password);
    // this.loginAuth.checkToken() && this.location.back();
    console.log("location",location);

    this.loginAuth.checkToken() && this.router.navigate(['Order']);
  }
}
