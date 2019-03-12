import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  serviceClick() {
    return console.log('service works...clicked');
  }

// GET LIST OF USERS FROM API
  getUsers() {
    // return this.http.get('https://reqres.in/api/users')
      return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  getPhotos() {
    // return this.http.get('https://reqres.in/api/users')
      return this.http.get('https://jsonplaceholder.typicode.com/photos')
  }
}
