import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsLocalService } from 'src/app/Services/products-local.service';
import { IProduct } from './../../ViewModels/iproduct';
import { Router } from '@angular/router';
import { PormotionsServiceService } from 'src/app/Services/pormotions-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass'],
})
export class ProductsListComponent implements OnInit, OnDestroy {
  productsList: IProduct[];
  pormotion: string = '';
  private subscription!: Subscription;
  constructor(
    private localProductsService: ProductsLocalService,
    private router: Router,
    private pormotions: PormotionsServiceService
  ) {
    this.productsList = localProductsService.getProducts();
  }

  ngOnInit(): void {
    let observerObj = {
      next: (data: string) => {
        this.pormotion = data;
      },
      error: () => {
        this.pormotion = '';
        // alert("oops!! something went wrong")
      },
      complete: () => {
        this.pormotion = '';
        // alert("we finished our pormotions :)")
      },
    };
    this.subscription = this.pormotions
      .getPormotionsIntervals(3)
      .subscribe(observerObj);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
