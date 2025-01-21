import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateModelComponent } from './common/create-model/create-model.component';

const routes: Routes = [{ path: 'form', component: CreateModelComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
