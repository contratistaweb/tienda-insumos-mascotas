import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: any[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.getProducts().then();
  }

  getProducts = async () => {
    let i = 0
    do {
      let numRandom:number = Math.random();
      let product = {
        id: i,
        name: 'product ' + (i + 1),
        stars: this.getStars(parseInt((numRandom*10).toString())),
        price: parseInt((numRandom * 1000).toString())*100,
        image: 'preview.jpg'
      }
      this.products.push(product);
      i++;
    }
    while (i < 100)
    console.log(this.products);
  }

  getStars = (number: number):number => {
    let again = true;
    while (again) {
      if (number <= 5) {
        break;
      }
      number = parseInt((Math.random() * 10).toString());
    }
    return number;
  }


}
