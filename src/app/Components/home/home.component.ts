import { Component, OnInit } from '@angular/core';
import { StoreClass } from 'src/app/ViewModels/store-class';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  storeObj:StoreClass;
  constructor() { 
    this.storeObj = new StoreClass(
      'perfect store',
      ['cairo', 'Helwan'],
      'assets/apple.jpg'
    );
  }

  ngOnInit(): void {
  }

}
