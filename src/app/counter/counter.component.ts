import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counter:number=0

  sumar(){
    this.counter=this.counter+1
  }
  restar(){
    this.counter=this.counter-1
  }
  reset(){
    this.counter=0
  }
}
