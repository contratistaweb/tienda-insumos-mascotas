import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {ImagesObject} from "../interfaces/images-object";

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  apiImagesUrl = environment.api_images_url;

  constructor(private http: HttpClient) { }

  getImage(count:number){
    let headers = new HttpHeaders()
      .set('Accept-Version', 'v1')
      .set('Authorization',`Client-ID ${environment.auth_api_images}`)
    return this.http.get<ImagesObject[]>(`${this.apiImagesUrl}/photos/random?topics=animals&orientation=landscape&count=${count.toString()}`, {headers})
  }

}
