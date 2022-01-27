import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductsLocalService } from 'src/app/Services/products-local.service';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.sass'],
})
export class EditProductsComponent implements OnInit {
  product: IProduct | undefined;
  constructor(
    private productsService: ProductsLocalService,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) {
    activatedRoute.paramMap.subscribe((parmMap) => {
      let productId = Number(parmMap.get('id'));
      this.product = productsService.getProductById(productId);
    });
  }

  onSubmit(...args: string[]) {
    let newProduct = {
      name: args[0],
      price: +args[1],
      quantity: +args[2],
      categoryId: +args[3],
      image: args[4],
      id: this.product ? this.product.id : Math.floor(Math.random() * 100),
    };

    this.product
      ? this.productsService.editProduct(newProduct)
      : this.productsService.addProduct(newProduct);
    this.location.back();
  }

  ngOnInit(): void {
    console.log(this.location);
  }
}
