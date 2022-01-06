import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsService} from "./services/products.service";
import {HttpClientModule} from "@angular/common/http";
import {ImagesService} from "./services/images.service";
import {BrandsService} from "./services/brands.service";
import {CategoriesService} from "./services/categories.service";
import {PaymentMethodsService} from "./services/payment-methods.service";
import {MobileAppsService} from "./services/mobile-apps.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ProductsService,
    ImagesService,
    BrandsService,
    CategoriesService,
    PaymentMethodsService,
    MobileAppsService
  ]
})
export class CoreModule {
}
