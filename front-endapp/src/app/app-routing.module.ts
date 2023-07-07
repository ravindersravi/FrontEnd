import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent } from './login/login.component';
import {DataComponent } from './data/data.component';
import {RegisterComponent } from './register/register.component';




const routes: Routes = [
  {
  
    path: 'register',
    component: RegisterComponent,
    },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'data',
    component: DataComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
