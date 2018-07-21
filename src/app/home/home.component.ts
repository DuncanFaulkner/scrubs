import { Component, OnInit, Input } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // imageSources: Array<{}>;
  // tiles: Tile[] = [
  //   { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
  //   { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
  //   { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
  //   { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' }
  // ];
  constructor() {
    console.log(this.constructor.toString().match(/\w+/g)[1] + ': constructor');
  }

  ngOnInit() {
    //   this.imageSources = [
    //     {
    //       url: 'https://chameleonimages.blob.core.windows.net/images/black.jpg',
    //       caption: 'Black short sleeve',
    //       href: '#config'
    //     },
    //     {
    //       url: 'https://chameleonimages.blob.core.windows.net/images/blue.jpg',
    //       clickAction: () => alert('custom click function')
    //     },
    //     {
    //       url: 'https://chameleonimages.blob.core.windows.net/images/green.jpg',
    //       caption: 'Apple TV',
    //       href: 'https://www.apple.com/'
    //     },
    //     'https://chameleonimages.blob.core.windows.net/images/burgundy.jpg'
    //   ];
  }
}
