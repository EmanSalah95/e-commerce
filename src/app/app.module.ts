import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { SideMenuComponent } from './Components/side-menu/side-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';


import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RoundShadowDirective } from './Directivs/round-shadow.directive';
import { BirthDatePipe } from './Pipes/birth-date.pipe';
import { CreditPipe } from './Pipes/credit.pipe';
import { AllProductsComponent } from './Components/all-products/all-products.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { MainContainerComponent } from './Components/main-container/main-container.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { EditProductsComponent } from './Components/AdminComponents/edit-products/edit-products.component';
import { DialogComponent } from './Components/MaterialComponents/dialog/dialog.component';
import {MatMenuModule} from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { DeleteDialogComponent } from './Components/MaterialComponents/delete-dialog/delete-dialog.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OrdersComponent,
    SideMenuComponent,
    RoundShadowDirective,
    BirthDatePipe,
    CreditPipe,
    AllProductsComponent,
    HomeComponent,
    LoginComponent,
    ProductDetailsComponent,
    NotFoundComponent,
    MainContainerComponent,
    ProductsListComponent,
    EditProductsComponent,
    DialogComponent,
    DeleteDialogComponent,
    SignUpComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatBadgeModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatMenuModule,
    ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
