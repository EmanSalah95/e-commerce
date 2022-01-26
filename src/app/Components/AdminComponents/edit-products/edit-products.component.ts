import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductsLocalService } from 'src/app/Services/products-local.service';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.sass']
})
export class EditProductsComponent implements OnInit {
  name: string = '';
  price: string = '';
  category: string = '';
  quantity: string = '';
  image: string = '';
  product:IProduct|undefined;
  constructor(
    private productsService: ProductsLocalService,
    private locationService: Location,
    private activatedRoute: ActivatedRoute
  ) {

      activatedRoute.paramMap.subscribe((parmMap) => {
        let productId = Number(parmMap.get('id'));
        this.product = productsService.getProductById(productId);
      });
      //     activatedRoute.params.subscribe( params=>{

      // const {name,image,id,categoryId,price,quantity}=productsService.getProductById(params['id']);
      // const product=productsService.getProductById(params['id']);
      // console.log(product);

      // this.name=currentProd?.name;
      // this.image=image;
      // this.price=price;
      // this.category=categoryId;
      // this.quantity=quantity;
      // console.log(id);
      // })

  }

  onSubmit(...args:string[]) {
    console.log(args);

    let newProduct = {
      name: args[0],
      price: +args[1],
      quantity: +args[2],
      categoryId: +args[3],
      image: args[4],
      id: this.product?this.product.id:54654654545,
    };
    console.log(newProduct);

    this.productsService.editProduct(newProduct);
    this.locationService.back();
  }


  ngOnInit(): void {
  }

}
