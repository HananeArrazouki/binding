import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Person{
  id: number,
  name:string
}

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {

  private _data:Person;

  @Output() onremove = new EventEmitter();


  @Input('data') set data(data:Person){
    this._data = data;
  }

  get data() {
    return this._data;
  }
  
  ngOnDestroy():void {

  }
  // constructor() {

  // }

  onRemove(){
    this.onremove.next(this.data.id);
  }

  // ngOnInit() {
  //   this.name = "Hanane";
  // }

  constructor() { }

  ngOnInit() {}

}
