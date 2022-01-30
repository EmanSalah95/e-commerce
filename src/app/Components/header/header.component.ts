import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { DialogComponent } from '../MaterialComponents/dialog/dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  isLogged: boolean;
  userName: string | null = '';

  constructor(private auth: AuthServiceService, private dialog: MatDialog) {
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
    let dialogRef = this.dialog.open(DialogComponent);
    dialogRef
      .afterClosed()
      .subscribe((logOut) => logOut === 'true' && this.auth.logout());
  }
}
