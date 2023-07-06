import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  heroesName:string [] =['hulk', 'spriderman', 'superman', 'antman', 'batman'];
  removeHeroe?: string;

  remove(){
   this.removeHeroe= this.heroesName.pop();
  }
}
