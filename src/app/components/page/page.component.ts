import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  public productList: Array<Product>  = new Array<Product>();

  // public productList1: Product[]  = [];
  
  constructor() { 
    this.productList.push(new Product().asGlasses());
    this.productList.push(new Product().asShoes());
    this.productList.push(new Product().asIphone13());
  }

  ngOnInit(): void {
  }

  public openCaioButton(text: string): void {
    alert(text + ' Botão do Caio Aberto!');
  }
}
