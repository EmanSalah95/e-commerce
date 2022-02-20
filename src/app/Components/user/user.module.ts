import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from 'src/app/Guards/authentication.guard';

const routes: Routes =[
  {path:'', redirectTo: '/User/Profile', pathMatch:'full'},
  {path:'Profile', component: ProfileComponent, canActivate: [AuthenticationGuard]},
  {path: 'UpdateProfile', component:UpdateUserComponent, canActivate: [AuthenticationGuard]}
]


@NgModule({
  declarations: [
    ProfileComponent,
    UpdateUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
