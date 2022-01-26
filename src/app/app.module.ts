import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductsComponent } from './Components/products/products.component';
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

import { FormsModule } from '@angular/forms';
import { RoundShadowDirective } from './Directivs/round-shadow.directive';
import { BirthDatePipe } from './Pipes/birth-date.pipe';
import { CreditPipe } from './Pipes/credit.pipe';
import { AllProductsComponent } from './Components/all-products/all-products.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { MainContainerComponent } from './Components/main-container/main-container.component';
import { AboutComponent } from './Components/about/about.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { AddProductComponent } from './Components/AdminComponents/add-product/add-product.component';
import { EditProductsComponent } from './Components/AdminComponents/edit-products/edit-products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
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
    AboutComponent,
    ProductsListComponent,
    AddProductComponent,
    EditProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatBadgeModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
