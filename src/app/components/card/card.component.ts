import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() name: string = '';
  @Input() price: number | string = 0.00;
  
  @Input() model: Product = new Product();

  constructor() { }

  ngOnInit(): void {
  }

  
}

class Product {
  name: string = 'markin';
  price: number | string = 1.23;
}
