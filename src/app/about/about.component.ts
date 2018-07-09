import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor() {
    console.log(this.constructor.toString().match(/\w+/g)[1] + ': constructor');
  }

  ngOnInit() {}
}
