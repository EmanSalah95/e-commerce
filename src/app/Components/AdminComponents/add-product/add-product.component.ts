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

  constructor(
  ) {}

 
  ngOnInit(): void {}
}
