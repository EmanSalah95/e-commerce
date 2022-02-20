import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProductsComponent } from './Components/AdminComponents/edit-products/edit-products.component';
import { LoginComponent } from './Components/login/login.component';
import { MainContainerComponent } from './Components/main-container/main-container.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { OrdersComponent} from './Components/orders/orders.component';
import { HomeComponent } from './Components/home/home.component';
import { AuthenticationGuard } from './Guards/authentication.guard';
import { SignUpComponent } from './Components/sign-up/sign-up.component';


const routes: Routes = [
  {path:'',component:MainContainerComponent, children:[
    {path: '', redirectTo: '/Products', pathMatch: 'full'},
    {path:'Order',component:OrdersComponent ,canActivate:[AuthenticationGuard]},
    {path:'Home',component:HomeComponent},
    {path:'Products',component:ProductsListComponent ,canActivate:[AuthenticationGuard]},
    {path:'ProductDetails/:id',component:ProductDetailsComponent},
    {path:'ProductForm/:id',component:EditProductsComponent},
    {path:'ProductForm',component:EditProductsComponent},
    {
      path: 'User',
      loadChildren: () => import('./Components/user/user.module').then(m=>m.UserModule)
    },
  ]},
  {path:'Login',component:LoginComponent},
  {path:'Register',component:SignUpComponent},
  {path:'**',component:NotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
