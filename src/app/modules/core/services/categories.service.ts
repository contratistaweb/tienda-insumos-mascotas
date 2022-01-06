import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  api_url = environment.api_url;
  constructor(private http: HttpClient) {
  }

  getCategories() {
    return this.http.get<string[]>(`${this.api_url}/categories`)
  }

}
