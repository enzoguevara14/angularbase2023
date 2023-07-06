import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  name:string='Pedro Pastor';
  age:number= 23;


  onChangeAge(value:number){
    this.age= value
  }
  onChangeName(value:string){
    this.name= value
  }


}
