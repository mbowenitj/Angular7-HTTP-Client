import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  users: any = [];
  searchContacts: string = '';

  curPage : number;
  pageSize : number;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
        this.users = data
        console.log(this.users);
        this.curPage = 1;
        this.pageSize = 4;
      }
    );
  }

  numberOfPages(){
    return Math.ceil(this.users.length / this.pageSize);
  };

  //   this.Save = function(){
  //   this.people.push({ name: this.newPerson.name, phone: this.newPerson.phone,
  //                       city: this.newPerson.city });
  //
  //   // clear input fields
  //   this.newPerson.name = '';
  //   this.newPerson.phone = '';
  //   this.newPerson.city = '';
  //
  //   return this;
  // };
}
