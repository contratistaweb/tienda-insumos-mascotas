import { Component, OnInit } from '@angular/core';
import {ImagesService} from "../../../core/services/images.service";

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

images: string[] = []

  constructor(private imagesService: ImagesService) { }

  ngOnInit(): void {
    this.imagesService.getImage(3).subscribe(res => {
      res.forEach(el => {
        this.images.push(el.urls.regular);
      })
    console.log('this.images',this.images)
    })
  }

}
