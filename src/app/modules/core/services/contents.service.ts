import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContentsService {

  api_url = environment.api_url;

  constructor(private http: HttpClient) {

  }

  getFooterContent(){
    return this.http.get<{title:string,links:string[]}[]>(`${this.api_url}/footer-content`);
  }
}
