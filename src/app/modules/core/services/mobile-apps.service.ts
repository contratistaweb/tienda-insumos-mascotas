import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MobileAppsService {

  api_url = environment.api_url;
  constructor(private http: HttpClient) { }

  getMobileApps(){
    return this.http.get<{name:string, image:string}[]>(`${this.api_url}/mobile-apps`);
  }
}
