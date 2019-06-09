import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  @Output() errorBtn =  new EventEmitter

  constructor() { }

  ngOnInit() {
  }

  btnPressed(){
    this.errorBtn.emit()
  }

}
