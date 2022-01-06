import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import { ProductResponse} from "../interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  api_url = environment.api_url;

  constructor(private http: HttpClient) {
  }

  getProducts(page:number, limit:number) {
    let headers = new HttpHeaders()
      .set('page',`${page.toString()}`)
      .set('limit',`${limit.toString()}`)
    return this.http.get<ProductResponse>(`${this.api_url}/products`,{headers});
  }
}
