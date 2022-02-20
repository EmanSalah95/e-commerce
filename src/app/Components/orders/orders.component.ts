import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DiscountOffers } from 'src/app/ViewModels/discount-offers';
import { StoreClass } from '../../ViewModels/store-class';
import { IProduct } from '../../ViewModels/iproduct';
import { ICategory } from '../../ViewModels/icategory';
import { IcartProduct } from '../../ViewModels/icartProduct';
import { AllProductsComponent } from '../all-products/all-products.component';
import { ProductsLocalService } from 'src/app/Services/products-local.service';
import { CategoriesService } from 'src/app/Services/categories-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.sass'],
})
export class OrdersComponent implements OnInit {
  //enum
  discount: DiscountOffers;
  storeObj: StoreClass;
  clientName: string;
  productsList: IProduct[];
  categoryList: ICategory[];
  categoryId: number = 0;
  orderCompleted: boolean = false;
  purshDate: Date;
  productsLayout: number = 1;
  addedProducts: IcartProduct[] = [];
  orderTotal: number = 0;
  @ViewChild(AllProductsComponent) productsObj!: AllProductsComponent;
  maxPrice: string = '';
  nationalId: string = '';
  creditNum: string = '0000000000000000';

  constructor(
    private localProductsService: ProductsLocalService,
    private categoriesSer:CategoriesService,
    ) {
    this.discount = DiscountOffers.d15;

    this.storeObj = new StoreClass(
      'perfect store',
      ['cairo', 'Helwan'],
      'assets/apple.jpg'
    );
    let userName = localStorage.getItem('userName');
    this.clientName = userName ? userName : 'Mohammed';
    this.categoryList = this.categoriesSer.getLocatCategories();
    this.productsList = this.localProductsService.getProducts();
    this.purshDate = new Date();
  }

  getCategory(id: number) {
    this.categoryId = id;
  }

  resetMax() {
    this.maxPrice = '';
  }

  setNID(nid: string) {
    this.nationalId = nid;
  }

  setCredit(cerdit: string) {
    this.creditNum = cerdit;
  }

  decreaseCount(id: number) {
    this.localProductsService.decreaseProdQuantity(id);
  }

  setDisplay(v: number) {
    this.productsLayout = v;
  }

  onAppend(event: any) {
    this.addedProducts.push(event);
    this.getOrderTotal();
  }
  removeFromCart(id: number) {
    this.addedProducts = this.addedProducts.filter((prod) => prod.id != id);
    this.getOrderTotal();
  }

  editProductTotalPrice(newCount: any, id: number) {
    this.addedProducts.forEach((prod) => {
      if (prod.id == id) {
        let isValid = this.productsObj.checkQuantity(newCount, prod.quantity);
        isValid ? (prod.count = +newCount) : null;
      }
    });
    this.getOrderTotal();
  }

  private getOrderTotal() {
    let total = 0;
    this.addedProducts.forEach((product) => {
      total += product.price * product.count;
    });
    this.orderTotal = total;
  }

  finishOrder() {
    this.productsObj.updateQuantaty(this.addedProducts);
    this.addedProducts = [];
    this.orderCompleted = !this.orderCompleted;
  }


  ngOnInit(): void {}
}
