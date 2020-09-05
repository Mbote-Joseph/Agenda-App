import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input() value: any;
  @Output() deleteEventInstanceEvent: EventEmitter<any> = new EventEmitter<any>();


  handleDeleteClick() {
    this.deleteEventInstanceEvent.emit(this.value);
    console.log("Delete button clicked!");
  }

  
  
  constructor() { }

  ngOnInit(): void {
  }

}
