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
  product: IProduct ={}as IProduct;
  productId:number=0;
  constructor(
    private productsService: ProductsLocalService,
    private productsBack:ProductsBackService,
    private location: Location,
    private activatedRoute: ActivatedRoute,
  ) {
    activatedRoute.paramMap.subscribe((parmMap) => {
      this.productId = Number(parmMap.get('id'));
      // this.product = productsService.getProductById(productId);
      this.productId&& this.productsBack.getProductById(this.productId).subscribe(data=>{
        this.product =data;
      })

    });
  }

  onSubmit(){
    this.productId
      ? this.productsBack.editProduct(this.product).subscribe(data=>console.log(data))
      : this.productsBack.addProduct(this.product).subscribe(data=>console.log(data));
    this.location.back();
  }

  ngOnInit(): void {
    console.log(this.location);
  }
}
