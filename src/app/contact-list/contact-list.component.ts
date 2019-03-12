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

// contacts = [
//     {
//       name:"Tom",
//       phone:"012-345-6789",
//       email:"tom@test.com",
//     },
//     {
//       name:"Jerry",
//       phone:"012-345-0989",
//       email:"jerryt@gmail.com"
//     },
//     {
//       name:"Philip",
//       phone:"012-345-1231",
//       email:"philip@gmail.com"
//     },
//     {
//       name:"Tito",
//       phone:"012-345-2232",
//       email:"tito@gmail.com"
//    }
// ];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
        this.users = data
        console.log(this.users);
      }
    );
  }



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
