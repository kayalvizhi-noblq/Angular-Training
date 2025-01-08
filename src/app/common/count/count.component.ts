import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrl: './count.component.scss'
})
export class CountComponent implements OnInit, OnChanges, OnDestroy{
  @Input() count: number = 0;
  @Input() appTitle : string = '';
  @Output() incrementChange = new EventEmitter();
  @Output() decrementChange = new EventEmitter();
  @Output() hideClick = new EventEmitter();
  
  increment(){
    this.incrementChange.emit();
  }
  
  decrement(){
    this.decrementChange.emit();
  }
  
  ngOnInit(): void {
    console.log('demo oninit')
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('count changes',changes)
  }
  
  onButtonHide(){
    this.hideClick.emit();
  }

  ngOnDestroy(): void {
    console.log('destroyed')
  }

}
