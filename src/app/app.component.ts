import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-test';
  timer:any;
  count = 0;

  constructor(){
    console.log('construct')
  }

  ngOnInit() {
    console.log('ngoninit')
    this.timer = setTimeout(() =>{
      this.title='changed title'
    },3000)
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit: View is initialized');
    const element = document.querySelector('h3'); 
    if (element) {
      element.style.color = 'red'; 
    }
  }

  // ngOnDestroy() {
  //   console.log('ngOnDestroy: Component is being destroyed');
  // }

  onChangeIncrement() {
    this.count++
  }

  onChangeDecrement() {
    this.count--
  }
}
