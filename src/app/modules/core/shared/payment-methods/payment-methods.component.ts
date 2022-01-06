import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.scss']
})
export class PaymentMethodsComponent implements OnInit {

  @Input() paymentMethod!: {name: string, image:string};
  constructor() { }

  ngOnInit(): void {
  }

}
