import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodsService {

  api_url = environment.api_url;
  constructor(private http: HttpClient) { }

  getPaymentMethods(){
    return this.http.get<{name:string, image:string}[]>(`${this.api_url}/payment-methods`)
  }
}
