import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SliderComponent } from './components/slider/slider.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import {CoreModule} from "../core/core.module";
import { CategoriesComponent } from './components/categories/categories.component';
import { FeaturedBrandsComponent } from './components/featured-brands/featured-brands.component';


@NgModule({
  declarations: [
    SliderComponent,
    HomeComponent,
    ProductComponent,
    CategoriesComponent,
    FeaturedBrandsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule
  ]
})
export class HomeModule { }
