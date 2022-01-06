import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  @Input() category!: string;
  constructor() { }

  ngOnInit(): void {
  }


}
