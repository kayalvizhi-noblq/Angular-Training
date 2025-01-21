import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { APIService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'User Details';
  count = 0;
  show : boolean = false;
  data:any;

  constructor(private apiService: APIService){
    console.log('construct')
  }

  ngOnInit() {
    console.log('ngoninit')
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
