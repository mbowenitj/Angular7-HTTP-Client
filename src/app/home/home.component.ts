import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  h1Style: boolean = false;
  photos: any = [];
  searchText: string = '';

  curPage : number;
  pageSize : number;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPhotos().subscribe(data => {
        this.photos = data
        console.log(this.photos);
        this.curPage = 1;
        this.pageSize = 4;
      }
    );
  }

  numberOfPages(){
    return Math.ceil(this.photos.length / this.pageSize);
  };


  firstClick(){
    this.h1Style = true;
    this.data.serviceClick();
    console.log("Home clicked");
  }
}
