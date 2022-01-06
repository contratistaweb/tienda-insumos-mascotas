import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'mobile-app',
  templateUrl: './mobile-app.component.html',
  styleUrls: ['./mobile-app.component.scss']
})
export class MobileAppComponent implements OnInit {

  @Input() mobileApp!: {name:string, image: string};
  screenWidth!:number;
  constructor() {
    this.onResize();
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
  }

}
