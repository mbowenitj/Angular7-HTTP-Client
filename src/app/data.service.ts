import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  // photos: any = [];
  //
  // curPage : number;
  // pageSize : number;

  constructor(private http: HttpClient) { }

  serviceClick() {
    return console.log('service works...clicked');
  }

  // GET LIST OF USERS FROM API
  getUsers() {
      return this.http.get('https://api.github.com/users')
  }

  getComments() {
    // return this.http.get('https://reqres.in/api/users')
      return this.http.get('https://jsonplaceholder.typicode.com/comments')
  }

  getEvents() {
      return this.http.get('https://api.github.com/users/mojombo/received_events')
  }
  // numberOfPages(){
  //   return Math.ceil(this.photos.length / this.pageSize);
  // };
}
