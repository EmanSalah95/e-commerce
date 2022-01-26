import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  isLogged: boolean;
  userName: string | null = '';

  constructor(private auth: AuthServiceService) {
    this.isLogged = this.auth.checkToken();
  }

  ngOnInit(): void {
    this.auth.getAuthenticatedState().subscribe((authState) => {
      this.isLogged = authState;
      this.userName = localStorage.getItem('userName')
        ? localStorage.getItem('userName')
        : '';
    });
  }

  handleLogOut() {
    this.auth.logout();
  }
}
