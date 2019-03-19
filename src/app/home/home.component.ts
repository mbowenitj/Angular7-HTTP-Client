import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  h1Style: boolean = false;
  users: any = [];
  searchText: string = '';

  curPage : number;
  pageSize : number;

  showLoader: boolean;

  constructor(private data: DataService, private spinner: NgxSpinnerService) { }

  ngOnInit() {

    // setTimeout(() => {
    //     /** spinner ends after 5 seconds */
    //     this.spinner.hide();
    // }, 5000);

    this.spinner.show();

    this.data.getUsers().subscribe(data => {
        this.users = data
        console.log(this.users);
        this.curPage = 1;
        this.pageSize = 4;
        this.spinner.hide();
      }
    );
  }

  // startLoadingSpinner() {
  //     this.ng4LoadingSpinnerService.show();
  //
  //     setTimeout(function() {
  //       this.ng4LoadingSpinnerService.hide();
  //     }.bind(this), 4000);
  // }

  numberOfPages(){
    return Math.ceil(this.users.length / this.pageSize);
  };


  firstClick(){
    this.h1Style = true;
    this.data.serviceClick();
    console.log("Home clicked");
  }
}
