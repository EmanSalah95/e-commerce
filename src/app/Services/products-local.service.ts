import { Injectable } from '@angular/core';
import { IProduct } from '../ViewModels/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsLocalService {
  private productsList: IProduct[];
  constructor() {
    this.productsList = [
      {
        id: 1,
        name: 'iphone',
        price: 13000,
        quantity: 50,
        categoryId: 1,
        image:
          'https://cdn.dxomark.com/wp-content/uploads/medias/post-95593/Apple-iPhone-13-Pro-Max-featured-image-packshot-review.jpg',
      },
      {
        id: 6,
        name: 'samsung galaxy',
        price: 5000,
        quantity: 15,
        categoryId: 1,
        image:
          'https://m.media-amazon.com/images/I/81A3nwwKt2S._AC_UL480_QL65_.jpg',
      },
      {
        id: 7,
        name: 'samsung plus',
        price: 7000,
        quantity: 8,
        categoryId: 1,
        image:
          'https://cdn.dxomark.com/wp-content/uploads/medias/post-95593/Apple-iPhone-13-Pro-Max-featured-image-packshot-review.jpg',
      },
      {
        id: 2,
        name: 'ipad',
        price: 25000,
        quantity: 1,
        categoryId: 2,
        image:
          'https://images.unsplash.com/photo-1521571942430-b492dedbd302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGlwYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      },
      {
        id: 8,
        name: 'ipad pro',
        price: 20000,
        quantity: 12,
        categoryId: 2,
        image:
          'https://m.media-amazon.com/images/I/81sxRBhe2sS._AC_UL480_FMwebp_QL65_.jpg',
      },
      {
        id: 5,
        name: 'ipad max',
        price: 30000,
        quantity: 9,
        categoryId: 2,
        image:
          'https://images.unsplash.com/photo-1521571942430-b492dedbd302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGlwYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      },
      {
        id: 3,
        name: 'samsung tv',
        price: 6000,
        quantity: 1,
        categoryId: 3,
        image:
          'https://m.media-amazon.com/images/I/41iBRYIQ6YL._AC_.jpg',
      },
      {
        id: 4,
        name: 'samsung tv smart',
        price: 8000,
        quantity: 15,
        categoryId: 3,
        image:
          'https://images-eu.ssl-images-amazon.com/images/I/61msNzwa8GS._AC_UL160_SR160,160_.jpg',
      },
    ];
  }

  getProducts() {
    return this.productsList;
  }

  getProductsByCategory(categId: number) {
    return categId == 0
      ? this.productsList
      : this.productsList.filter((prod) => prod.categoryId === categId);
  }

  getProductsByMaxPrice(maxPrice: number) {
    return this.productsList.filter( prod => prod.price<=maxPrice);
  }

  getProductsByCategAndPrice(categId: number,maxPrice: number){
    let filteredCateg=this.getProductsByCategory(categId);
     filteredCateg =maxPrice? filteredCateg.filter( prod => prod.price<=maxPrice):filteredCateg;
     return filteredCateg;
  }

  getProductById(id:number):IProduct|undefined{
    let pr:IProduct|undefined=this.productsList.find( prod=>prod.id==id);    
    return pr;
  }

  getAllProductsIds(){
    return this.productsList.map( (i)=>i.id)
  }

  addProduct(prod:IProduct){
    this.productsList.push(prod);
  }

  editProduct(editedProduct:IProduct){
    this.productsList.forEach(prod=>{
      if (prod.id==editedProduct.id) {
        prod.name=editedProduct.name;
        prod.price=editedProduct.price;
        prod.quantity=editedProduct.quantity;
        prod.categoryId=editedProduct.categoryId;
        prod.image=editedProduct.image;
      }
    })

  }

  deleteProduct(id:number){
    this.productsList= this.productsList.filter( prod =>prod.id!=id);
    
  }

  decreaseProdQuantity(id: number) {
    this.productsList.forEach((element) => {
      if (element.id == id) {
        --element.quantity;
      }
    });
  }
}
