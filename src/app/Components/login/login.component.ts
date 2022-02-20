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
  name: string = '';
  password: string = '';
  constructor(
    private loginAuth: AuthServiceService,
    private router: Router,
    private location: Location,
  ) {}
  
  ngOnInit(): void {
    this.loginAuth.checkToken() &&
      this.location.back();
  }

  loginHandler(username: string, password: string) {
    this.loginAuth.login(username, password);

    let destination = localStorage.getItem('guardedUrl');
    this.loginAuth.checkToken() &&
      this.router.navigate([destination ? destination : 'Home']);
    destination && localStorage.removeItem('guardedUrl');
  }
}
