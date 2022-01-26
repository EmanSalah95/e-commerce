import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { IProduct } from './../../ViewModels/iproduct';
import { IcartProduct } from '../../ViewModels/icartProduct';
import { ProductsLocalService } from './../../Services/products-local.service';

@Component({
  selector: 'all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.sass'],
})
export class AllProductsComponent implements OnInit, OnChanges {
  productsList: IProduct[];
  filteredProducts: IProduct[] = [];
  @Input() productsStr: number = 1;
  @Input() recievedCateg: number = 0;
  @Input() recievedMaxPrice: number = 0;
  @Input() cartProducts:IcartProduct[]=[];
  @Output() appendCart: EventEmitter<IcartProduct>;

  constructor(private localProductsService: ProductsLocalService) {
    this.productsList = localProductsService.getProducts();
    this.appendCart = new EventEmitter<IcartProduct>();
  }
  ngOnChanges(): void {

    this.filteredProducts =
      this.localProductsService.getProductsByCategAndPrice(
        this.recievedCateg,
        this.recievedMaxPrice
      );
  }

  private filterByCategory() {
    this.filteredProducts =
      +this.recievedCateg === 0
        ? this.productsList
        : this.productsList.filter(
            (prod) => prod.categoryId === +this.recievedCateg
          );
    this.recievedMaxPrice && this.filterByMaxPrice();
  }

  private filterByMaxPrice() {
    this.filteredProducts = this.filteredProducts.filter(
      (prod) => prod.price <= this.recievedMaxPrice
    );
  }

  decreaseCount(id: number) {
    this.productsList.forEach((element) => {
      if (element.id == id) {
        --element.quantity;
      }
    });
  }

  checkIsAdded(pid:number):boolean{
    let found=this.cartProducts.find(i=>i.id===pid);
    return found?true:false;
  }

  checkQuantity(addedQuant: number, prodQuantity: number): boolean {
    let isAvailable = addedQuant <= prodQuantity ? true : false;
    !isAvailable && alert('this quantity more than stock quantity');
    return isAvailable;
  }

  addToCart(product: IProduct, addedQuantity: number) {
    let { id, quantity, price, name, image } = product;
    let isQuantityAvailable = this.checkQuantity(addedQuantity, quantity);
    if (isQuantityAvailable) {
      let addedProduct: IcartProduct = {
        id,
        quantity,
        price,
        name,
        image,
        count: addedQuantity?addedQuantity:1,
      };
      this.appendCart.emit(addedProduct);
    }
  }

  updateQuantaty(cartProducts: IcartProduct[]) {
    cartProducts.forEach((cartProd) => {
      this.filteredProducts.forEach((prod) => {
        if (cartProd.id == prod.id) prod.quantity -= cartProd.count;
      });
    });
  }

  ngOnInit(): void {}
}
