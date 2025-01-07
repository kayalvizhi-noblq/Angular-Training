import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoComponent } from './common/demo/demo.component';
import { CountComponent } from './common/count/count.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DemoComponent,CountComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './appstyle.component.scss']
})
export class AppComponent {
  title = 'angular-test';

  count = 0;

  onChangeIncrement() {
    console.log('click')
    this.count++
  }

  onChangeDecrement() {
    this.count--
  }


}
