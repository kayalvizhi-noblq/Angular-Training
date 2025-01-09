import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountComponent } from './common/count/count.component';
import { TitleComponent } from './common/title/title.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateModelComponent } from './common/create-model/create-model.component';

@NgModule({
  declarations: [
    AppComponent,
    CountComponent,
    TitleComponent,
    CreateModelComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
