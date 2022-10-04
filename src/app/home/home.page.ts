import { Component } from '@angular/core';
import {Person} from './person/person.component'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name:string="Hanane";
  people:Person[]=[];
  id:number=0;

  
  constructor() {}

  addPerson(nombre:string){
    this.people.push({id:this.id++,name:nombre});
    this.name="";
  }

  removePerson(id:number){
    // setTimeout (()=>{})    !!!!!!
    this.people = this.people.filter(p=> p.id!=id)
    // var myFunction = () => {}; //funcion flecha 
    // var index = this.people.findIndex(p=>p.id ==id);
    // if(index>=0){
    //   this.people.splice(index,1);
    // }
  }

}
