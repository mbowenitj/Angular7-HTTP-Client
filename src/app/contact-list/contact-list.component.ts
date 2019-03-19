import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  comments: any = [];
  searchContacts: string = '';

  curPage : number;
  pageSize : number;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getComments().subscribe(data => {
        this.comments = data
        console.log(this.comments);
        this.curPage = 1;
        this.pageSize = 3;
      }
    );
  }

   // Add new comments
  //  addcomments(){
  //    this.comments.push({ name: this.comments.name });
  // }

  numberOfPages(){
    return Math.ceil(this.comments.length / this.pageSize);
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
