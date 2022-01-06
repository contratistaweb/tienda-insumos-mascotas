import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Brand} from "../interfaces/brand";

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  api_url = environment.api_url;

  constructor(private http: HttpClient) {
  }

  getBrands(brandName?: string, next?: number, brandLimit?: number) {
    if (brandName !== undefined) {
      let headers = new HttpHeaders()
        .set('name', `${brandName}`);
      return this.http.get<Brand[]>(`${this.api_url}/brands`, {headers})
    } else if (next !== undefined && brandLimit !== undefined) {
      let headers = new HttpHeaders()
        .set('next', `${next.toString()}`)
        .set('brands_limit', `${brandLimit.toString()}`);
      return this.http.get<Brand[]>(`${this.api_url}/brands`, {headers})
    } else {
      return this.http.get<Brand[]>(`${this.api_url}/brands`)
    }
  }
}
