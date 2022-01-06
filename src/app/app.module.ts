import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from "./modules/core/shared/navbar/navbar.component";
import {FooterComponent} from "./modules/core/shared/footer/footer.component";
import {LayoutComponent} from "./modules/core/shared/layout/layout.component";
import {CoreModule} from "./modules/core/core.module";
import {PaymentMethodsComponent} from "./modules/core/shared/payment-methods/payment-methods.component";
import {MobileAppComponent} from "./modules/core/shared/mobile-app/mobile-app.component";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    PaymentMethodsComponent,
    MobileAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
