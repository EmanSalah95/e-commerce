import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductsLocalService } from 'src/app/Services/products-local.service';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { ActivatedRoute } from '@angular/router';
import { ProductsBackService } from 'src/app/Services/products-back.service';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.sass'],
})
export class EditProductsComponent implements OnInit {
  product: IProduct = {} as IProduct;
  productId: number = 0;
  constructor(
    private productsService: ProductsLocalService,
    private productsBack: ProductsBackService,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) {
    activatedRoute.paramMap.subscribe((parmMap) => {
      this.productId = Number(parmMap.get('id'));

      if (this.productId)
        this.product = this.productsService.getProductById(this.productId)!;

      // this.productId&& this.productsBack.getProductById(this.productId).subscribe(data=>{
      //   this.product =data;
      // })
    });
  }

  onSubmit() {
    this.productId
      ? this.productsService.editProduct(this.product)
      : this.productsService.addProduct(this.product);
    this.location.back();
  }

  // onSubmit(){
  //   this.productId
  //     ? this.productsBack.editProduct(this.product).subscribe(data=>console.log(data))
  //     : this.productsBack.addProduct(this.product).subscribe(data=>console.log(data));
  //   this.location.back();
  // }

  ngOnInit(): void {
    console.log(this.location);
  }
}
