import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { ProductsLocalService } from 'src/app/Services/products-local.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.sass'],
})
export class AddProductComponent implements OnInit {
  name: string = '';
  price: string = '';
  category: string = '';
  quantity: string = '';
  image: string = '';
  constructor(
    private productsService: ProductsLocalService,
    private locationService: Location
  ) {}

  onSubmit() {
    let newProduct: IProduct = {
      name: this.name,
      price: +this.price,
      quantity: +this.quantity,
      image: this.image,
      id: Math.floor(Math.random() * 100),
      categoryId: +this.category,
    };
    this.productsService.addProduct(newProduct);
    this.locationService.back();
  }

  ngOnInit(): void {}
}
