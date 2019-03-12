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

//   products = [
//     {
//       id:"1",
//       name:"test",
//       email:"test@test.com",
//       color:"white",
//       price:" R200",
//     },
//     {
//       id:"23",
//       name:"jabu",
//       email:"jabu@test.com",
//       color:"white",
//       price:" R200",
//     },
//     {
//       id:"2",
//       name:"ninja",
//       email:"ninjam@test.com",
//       color:"red",
//       price:" R350",
//     },
//     {
//       id:"3",
//       name:"jomo",
//       email:"jomom@test.com",
//       color:"blue",
//       price:" R400"
//     }
// ]


  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPhotos().subscribe(data => {
        this.photos = data
        console.log(this.photos);
        this.curPage = 1;
        this.pageSize = 3;
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
