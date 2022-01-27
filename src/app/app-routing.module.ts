import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { AddProductComponent } from './Components/AdminComponents/add-product/add-product.component';
import { EditProductsComponent } from './Components/AdminComponents/edit-products/edit-products.component';
import { LoginComponent } from './Components/login/login.component';
import { MainContainerComponent } from './Components/main-container/main-container.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { ProductsComponent } from './Components/products/products.component';
import { HomeComponent } from './Components/home/home.component';
import { AuthenticationGuard } from './Guards/authentication.guard';


const routes: Routes = [
  {path:'',component:MainContainerComponent, children:[
    {path: '', redirectTo: '/Products', pathMatch: 'full'},
    {path:'Order',component:ProductsComponent ,canActivate:[AuthenticationGuard]},
    {path:'About',component:AboutComponent},
    {path:'Home',component:HomeComponent},
    {path:'Products',component:ProductsListComponent},
    {path:'ProductDetails/:id',component:ProductDetailsComponent},
    {path:'ProductForm/:id',component:EditProductsComponent},
    {path:'AddProduct/:id',component:AddProductComponent},
  ]},
  {path:'Login',component:LoginComponent},
  {path:'**',component:NotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
