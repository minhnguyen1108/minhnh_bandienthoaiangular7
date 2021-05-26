import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cacloaidienthoai',
  templateUrl: './cacloaidienthoai.component.html',
  styleUrls: ['./cacloaidienthoai.component.css']
})
export class CacloaidienthoaiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  list =[
    {
      kind:"Văn phòng",
      img:"room1.jpg",
      name:"Bly Microfiber / Microsuede 56 Armless Loveseat",
      
    },

    {
      kind:"Nhà ở",
      img:"room3.jpg",
      name:"Bly Microfiber / Microsuede 56 Armless Loveseat",
    },

    {
      kind:"Khách sạn",
      img:"room2.jpg",
      name:"Bly Microfiber / Microsuede 56 Armless Loveseat",
    },

    {
      kind:"Biệt thự",
      img:"room1.jpg",
      name:"Bly Microfiber / Microsuede 56 Armless Loveseat",
    },

    { 
      kind:"Phòng Delux",
      img:"room2.jpg",
      name:"Bly Microfiber / Microsuede 56 Armless Loveseat",
    },

    {
      kind:"Nhà nhỏ",
      img:"room3.jpg",
      name:"Bly Microfiber / Microsuede 56 Armless Loveseat",
    },
    {
      kind:"Khách sạn",
      img:"room2.jpg",
      name:"Bly Microfiber / Microsuede 56 Armless Loveseat",
    },

    {
      kind:"Biệt thự",
      img:"room1.jpg",
      name:"Bly Microfiber / Microsuede 56 Armless Loveseat",
    },


  ]
}
