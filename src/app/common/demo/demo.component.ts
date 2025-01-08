import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent implements OnInit,OnChanges{
@Input() appTitle : string = '';

ngOnInit(): void {
    console.log('demo oninit')
}

ngOnChanges(changes: SimpleChanges): void {
    console.log('demo changes',changes)
}

}
