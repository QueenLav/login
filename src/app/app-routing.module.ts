import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { WelcomeBoardComponent } from './welcome-board/welcome-board.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
 
  { path: 'welcome', component: WelcomeBoardComponent},
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule, BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
