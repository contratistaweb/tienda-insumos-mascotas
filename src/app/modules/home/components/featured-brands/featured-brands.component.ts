import {Component, Input, OnInit} from '@angular/core';
import {Brand} from "../../../core/interfaces/brand";

@Component({
  selector: 'featured-brands',
  templateUrl: './featured-brands.component.html',
  styleUrls: ['./featured-brands.component.scss']
})
export class FeaturedBrandsComponent implements OnInit {

  @Input() brand!: Brand;
  constructor() { }

  ngOnInit(): void {

  }

}
