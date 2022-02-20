import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsLocalService } from 'src/app/Services/products-local.service';
import { IProduct } from './../../ViewModels/iproduct';
import { Router } from '@angular/router';
import { PormotionsServiceService } from 'src/app/Services/pormotions-service.service';
import { Subscription } from 'rxjs';
import { ProductsBackService } from 'src/app/Services/products-back.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from './../MaterialComponents/delete-dialog/delete-dialog.component';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass'],
})
export class ProductsListComponent implements OnInit, OnDestroy {
  productsList: IProduct[]=[];
  pormotion: string = '';
  private subscription!: Subscription;
  constructor(
    private localProductsService: ProductsLocalService,
    private productsBack:ProductsBackService,
    private router: Router,
    private pormotions: PormotionsServiceService,
    private dialog: MatDialog
  ) {
    this.productsList = localProductsService.getProducts();
    // this.productsBack.getProducts().subscribe(data=>{this.productsList =data})
  }

  removeProduct(id:number,event:any){
    let dialogRef = this.dialog.open(DeleteDialogComponent);
    event.stopPropagation();
    dialogRef
      .afterClosed()
      .subscribe((isConfirmed) => {
      if (isConfirmed === 'true') {
      //  this.productsBack.deleteProduct(id).subscribe(data=>console.log(data));
       this.productsList= this.productsList.filter(i=>i.id!==id);
       this.localProductsService.deleteProduct(id);
      }}
      );
  }

  ngOnInit(): void {
    this.productsBack.getProducts().subscribe(data=>{this.productsList =data})
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
