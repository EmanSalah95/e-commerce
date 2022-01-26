import { Component, OnInit } from '@angular/core';
import { ProductsLocalService } from 'src/app/Services/products-local.service';
import { IProduct } from './../../ViewModels/iproduct';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass']
})
export class ProductsListComponent implements OnInit {
  productsList: IProduct[];
  constructor(private localProductsService: ProductsLocalService ,router:Router) {
    this.productsList = localProductsService.getProducts();
   }

  ngOnInit(): void {
  }

}
