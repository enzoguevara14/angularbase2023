import { Component, EventEmitter, Output,  } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'app-dbz-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent {
  character: Character={
    name:'',
    power:0
  };

  @Output()
  onNewCharacter: EventEmitter<Character>= new EventEmitter()
emitCharacter(){
  if(this.character.name.length===0) return

  this.onNewCharacter.emit(this.character)

  this.character={name:'', power:0}
}

}
