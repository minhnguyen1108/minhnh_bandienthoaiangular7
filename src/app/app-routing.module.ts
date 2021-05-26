import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CacloaidienthoaiComponent } from './cacloaidienthoai/cacloaidienthoai.component';
import { LoginComponent } from './login/login.component';
import { NoithatspchitietComponent } from './noithatspchitiet/noithatspchitiet.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { TrangchuspchitietComponent } from './trangchuspchitiet/trangchuspchitiet.component';

const routes: Routes = [
  {path:'trangchu',component:TrangchuComponent },
  {path:'cacloaidienthoai',component:CacloaidienthoaiComponent},
  {path:'trangchuspchitiet',component:TrangchuspchitietComponent},
  {path:'noithatspchitiet',component:NoithatspchitietComponent},
  {path:'login',component:LoginComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
