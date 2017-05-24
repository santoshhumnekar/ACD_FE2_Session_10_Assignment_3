import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  person = [
    {name : "Dan", age : 21},
    {name : "Ray", age : 20}
  ]

  talk(){
    alert ("I am talking, LISTEN!");
  }
}
