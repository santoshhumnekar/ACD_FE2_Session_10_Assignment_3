import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeTitle = "Welcome to the Home Directory";
  @Input() person ;
  @Output() onTalk = new EventEmitter();

  fireTalkEvent(e){
    this.onTalk.emit(e);
  }

  constructor() { }

  ngOnInit() {
  }

}
