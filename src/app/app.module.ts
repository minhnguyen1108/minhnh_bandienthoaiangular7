import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { CacloaidienthoaiComponent } from './cacloaidienthoai/cacloaidienthoai.component';
import { TrangchuspchitietComponent } from './trangchuspchitiet/trangchuspchitiet.component';
import { NoithatspchitietComponent } from './noithatspchitiet/noithatspchitiet.component';
import { LoginComponent } from './login/login.component';

// import http cho json
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TrangchuComponent,
    CacloaidienthoaiComponent,
    TrangchuspchitietComponent,
    NoithatspchitietComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  public list =[
    {
      kind:"Ghế nhôm",
      img:"room1.jpg",
      name:"Ghế không ngồi được",
      price:"1.200.000 VNĐ",
      mota:"Đây là chiếc ghế 'ma ghíc' có chỗ nhưng lại không ngồi được vì vậy đây là hàng độc quyền nên không bán được."
    },

    {
      kind:"Ghế nhôm",
      img:"room2.jpg",
      name:"Bàn không phải để ngồi",
      price:"1.200.000 VNĐ",
      mota:"Đây là chiếc ghế 'ma ghíc' có chỗ nhưng lại không ngồi được vì vậy đây là hàng độc quyền nên không bán được."
    },

    {
      kind:"Ghế nhôm",
      img:"room2.jpg",
      name:"Bàn không phải để ngồi",
      price:"1.200.000 VNĐ",
      mota:"Đây là chiếc ghế 'ma ghíc' có chỗ nhưng lại không ngồi được vì vậy đây là hàng độc quyền nên không bán được."
    },

    {
      kind:"Ghế nhôm",
      img:"room2.jpg",
      name:"Bàn không phải để ngồi",
      price:"1.200.000 VNĐ",
      mota:"Đây là chiếc ghế 'ma ghíc' có chỗ nhưng lại không ngồi được vì vậy đây là hàng độc quyền nên không bán được."
    },

    {
      kind:"Ghế nhôm",
      img:"room2.jpg",
      name:"Bàn không phải để ngồi",
      price:"1.200.000 VNĐ",
      mota:"Đây là chiếc ghế 'ma ghíc' có chỗ nhưng lại không ngồi được vì vậy đây là hàng độc quyền nên không bán được."
    },

    {
      kind:"Ghế nhôm",
      img:"room2.jpg",
      name:"Bàn không phải để ngồi",
      price:"1.200.000 VNĐ",
      mota:"Đây là chiếc ghế 'ma ghíc' có chỗ nhưng lại không ngồi được vì vậy đây là hàng độc quyền nên không bán được."
    },

  ]

 }
