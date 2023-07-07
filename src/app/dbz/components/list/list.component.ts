import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  characterList: Character[]=[{
    name:'Truck',
    power:100
  }]
  @Output()
  onDeleteID: EventEmitter<string>= new EventEmitter()


  onDeleteCharacter(id?:string){
    if(id)return

this.onDeleteID.emit(id)


  }
}
