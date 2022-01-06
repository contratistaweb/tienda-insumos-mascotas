import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../../core/services/products.service";
import {Product} from "../../../core/interfaces/product";
import {Brand} from "../../../core/interfaces/brand";
import {BrandsService} from "../../../core/services/brands.service";
import {CategoriesService} from "../../../core/services/categories.service";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  page = 1;
  limit = 12;
  next = true;
  previous = false;

  brands: Brand[] = [];
  nextBrands = 0;
  brandLimit = 6;

  categories: string[] = [];



  constructor(
    private productsService: ProductsService,
    private brandsService: BrandsService,
    private categoriesService: CategoriesService
  ) {

  }

  ngOnInit(): void {
    this.getProducts(1, this.limit);
    this.getBrands();
    this.getCategories();

  }

  getCategories() {
    this.categoriesService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  getBrands(event?: any) {
    if (event !== undefined) {
      if (event.target.id === 'nextBrand') {
        this.brandsService.getBrands(undefined, ++this.nextBrands, this.brandLimit)
          .subscribe(brands => this.brands = brands, err => console.log(err));
      } else {
        this.brandsService.getBrands(undefined, --this.nextBrands, this.brandLimit)
          .subscribe(brands => this.brands = brands, err => console.log(err));
      }
    } else {
      this.brandsService.getBrands(undefined, this.nextBrands, this.brandLimit)
        .subscribe(brands => this.brands = brands, err => console.log(err));
    }
  }

  getProducts(page: number, limit: number) {
    this.productsService.getProducts(page, limit)
      .subscribe(productResponse => {
        this.products = productResponse.products;
        this.page = productResponse.page;
        this.next = productResponse.next;
        this.previous = productResponse.previous;
        console.log('productResponse.previous', productResponse.previous)
      }, err => console.log(err));
  }

  pagination(event: any) {
    console.log('event', event.target.id)
    if (event.target.id === 'next') {

      let limit = this.limit;
      this.next ? this.getProducts(++this.page, limit) : '';
    } else {
      let limit = this.limit;
      this.previous ? this.getProducts(--this.page, limit) : '';
    }
  }

  prevNum(actuallyPage: number) {
    return parseInt(actuallyPage.toString()) - parseInt('1');
  }

  nextNum(actuallyPage: number) {
    return parseInt(actuallyPage.toString()) + parseInt('1');
  }


}
