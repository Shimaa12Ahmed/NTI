
import { Component,isStandalone } from '@angular/core';

@Component({
  selector: 'app-load',
  imports: [],
    standalone:true,
  templateUrl: './load.html',
  styleUrl: './load.css',
})
export class LoadComponent {
  btnCount=0;

  increment(){
    this.btnCount++;
  }
  decrement(){
    this.btnCount--;
  }
}
