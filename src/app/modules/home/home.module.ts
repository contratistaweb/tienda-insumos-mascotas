import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import {NavbarComponent} from "./components/navbar/navbar.component";
import { SliderComponent } from './components/slider/slider.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    HomeComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
