import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';
import {v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 600,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
  ];

  onDeleteCharacter(id:string){
    this.characters= this.characters.filter(character=> character.id!==id)
  }

  onNewCharacter(character:Character){
  const newCharacter :Character={
    id:uuid(),
   ...character,
  }

  this.characters.push(newCharacter)

  }
}
