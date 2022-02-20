import {
  Component,
  Input,
  OnInit,
  OnChanges,
  Output,
  EventEmitter,
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
  @Input() productsLayout: number = 1;
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

  addToCart(product: IProduct, addedQuantity: number,event?:any) {
    let { id, quantity, price, name, image } = product;
    let isQuantityAvailable = this.checkQuantity(addedQuantity, quantity);
    event && event.stopPropagation();

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
