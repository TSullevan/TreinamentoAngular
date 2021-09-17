import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  public product1 = new Product()
  public product2 = new Product()
  
  constructor() { 
    this.product2.name = 'Rakin Sadara';
    this.product2.price = 1.99;
  }

  ngOnInit(): void {
  }

}

class Product {
  name: string = 'ParkinPadara';
  price: number | string = 9.99;
}

