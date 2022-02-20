import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsLocalService } from 'src/app/Services/products-local.service';
import { IProduct } from 'src/app/ViewModels/iproduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass'],
})
export class ProductDetailsComponent implements OnInit {
  productId: number = 0;
  product: IProduct | undefined;
  allProductsIds:number[];
  constructor(
    private productsService: ProductsLocalService,
    private ActivRouter: ActivatedRoute,
    private router: Router
    ) {
    this.allProductsIds=productsService.getAllProductsIds();
    ActivRouter.paramMap.subscribe((parmMap) => {
      this.productId = Number(parmMap.get('id'));
      this.product = productsService.getProductById(this.productId);
    });
  }

  getPrevProduct(){
    let prodIndex=this.allProductsIds.findIndex( id=>id===this.productId);
    if(prodIndex>0){
      let destinationId=this.allProductsIds[prodIndex-1];
      this.router.navigate(['./ProductDetails',destinationId]);
    }
  }

  getNextProduct(){
    let prodIndex=this.allProductsIds.findIndex( id=>id===this.productId);

    if(prodIndex<this.allProductsIds.length-1){
      let destinationId=this.allProductsIds[prodIndex+1];
      this.router.navigate(['./ProductDetails',destinationId]);
    }
  }

  ngOnInit(): void {}
}
