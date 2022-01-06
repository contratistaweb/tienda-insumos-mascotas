import { Component, OnInit } from '@angular/core';
import {PaymentMethodsService} from "../../services/payment-methods.service";
import {MobileAppsService} from "../../services/mobile-apps.service";

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  methods: { name: string, image: string }[] = [];
  mobileApps: { name: string, image: string }[] = [];

  constructor(
    private paymentMethodsService: PaymentMethodsService,
    private mobileAppsService: MobileAppsService
  ) { }

  ngOnInit(): void {
    this.getPaymentMethods();
    this.getMobileApps();
  }

  getPaymentMethods() {
    this.paymentMethodsService.getPaymentMethods()
      .subscribe(methods => this.methods = methods, err => console.log(err));
  }

  getMobileApps() {
    this.mobileAppsService.getMobileApps()
      .subscribe(mobileApps => this.mobileApps = mobileApps, err => console.log(err));
  }
}
