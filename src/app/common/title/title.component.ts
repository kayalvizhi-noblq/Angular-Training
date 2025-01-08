import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent {
@Output() showCick = new EventEmitter();
  
onButtonClick(){
  this.showCick.emit();
}
}
