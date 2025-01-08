import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'Total Count';
  count = 0;
  show : boolean = false;

  constructor(){
    console.log('construct')
  }

  ngOnInit() {
    console.log('ngoninit')
    setTimeout(() =>{
      this.title='Total Count(Number)'
    },3000)
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit: View is initialized');
  }

  onChangeIncrement() {
    this.count++
  }

  onChangeDecrement() {
    this.count--
  }

  showButton(){
    this.show = !this.show;
  }
}
