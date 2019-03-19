import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.scss']
})
export class CalculationComponent implements OnInit {

  showSelected : boolean;
  showSelectedParagraph: boolean;

  events: any = [];

  // events = [
  //     { name: "John Doe", phone: "3452345678", city: "New York" },
  //     { name: "Sarah Parker", phone: "1236548769", city: "Chicago" },
  //     { name: "Little John", phone: "4567853432", city: "Los Angeles" },
  //     { name: "Adam Doe", phone: "9025673152", city: "Las Vegas" }
  // ];

  constructor(private data: DataService) { }


  ngOnInit() {
    this.data.getEvents().subscribe(data => {
        this.events = data
        console.log(this.events);
      }
    );
  }

  // listen for change event in select option
  selectChange(){
    console.log("select changed");
    this.showSelected = true;
    // alert("select changed");
  }

  // If checkbox is checked
  toggleCheckbox(event) {
     if ( event.target.checked ) {
       console.log("checked");
       this.showSelectedParagraph = true;
    }else{
      this.showSelectedParagraph = false;
    }
  }
}
