import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../core/interfaces/product";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input()
  product!: Product;
  arrayStars: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.stars();
  }

  membershipPrice = (num: number): number => {
    return parseInt((num / 1.175).toString());
  }

  stars = () => {
    let i = 0;
    while (i < 5) {
      this.arrayStars.push('bi-star');
      i++;
    }
  }
}
