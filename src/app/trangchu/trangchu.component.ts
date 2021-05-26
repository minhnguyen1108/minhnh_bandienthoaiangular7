import { Component, OnInit } from '@angular/core';
import { DatajsonService } from '../datajson.service';
@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent implements OnInit {

  constructor(public data: DatajsonService) { }
  public list:any;
  public begin: number = 0;
  public end: number = 3;
  public prop: string = "price";
  public soducuoi: number = 0 ;
  sortFirst = true;
  orderBy(value: string) {
    this.prop = value;
  }
  
  ngOnInit() {

        // gọi hàm getdulieu bên dataservice
        this.data.getDulieu().subscribe(res=>{
          // gán biến res chứa dữ lieuj json vào biến lists
          this.list = res;
          console.log(this.list);
    });
    
  }
  sort(){
    if(this.sortFirst){
      this.lists = this.lists.sort((high, low) => low.price - high.price);
    }else{
      this.lists = this.lists.sort((low, high)=> low.price - high.price);
    }
    this.sortFirst=!this.sortFirst;
  }
  first() {
    this.begin = 0;
    this.end = 3;
  }
  prev() {
    this.begin = this.begin - 0;
    this.end = this.begin + 3;
    if (
      this.begin < 0
    ) {
      this.begin = 0;
      this.end = 3;
    }
    
  }
  next() {
    this.begin = this.begin + 3;
    this.end = this.begin + 3;
    if (this.end > this.lists.length) {
      this.end = this.lists.length;
      this.soducuoi = this.lists.length % 3;
      if (this.soducuoi == 0) {
        this.begin = this.end - 3;
      } else {
        this.begin = this.end - this.soducuoi;

      }
    }
  } 
  last() {
    let number = Math.ceil(this.lists.length / 2);
    this.begin = number * 2 - 3;
    this.end = this.begin + 3;
    console.log(this.begin);
  }

  lists = [{
    "kind": "IPhone",
    "img": "hinh-anh-iphone-x-plus-voi-3-camera-sau-khien-cac-fan-phat-cuong-1.jpg",
    "name": "IPhone XS MAX",
    "price": 32000000,
    "mota": "Đây là iphone vip pro."
},

{
    "kind": "SAMSUNG",
    "img": "Samsung-Galaxy-S21-Ultra-color-negro.jpg",
    "name": "Samsung Galaxy S21 Ultra",
    "price": 22000000,
    "mota": "Đây là iphone vip pro."
},

{
    "kind": "OPPO",
    "img": "Oppo-R17-color-2.jpg",
    "name": "Oppo R17",
    "price": 12000000,
    "mota": "Đây là iphone vip pro."
},
{
  "kind": "OPPO",
  "img": "Oppo-R17-color-2.jpg",
  "name": "Oppo R17",
  "price": 12000000,
  "mota": "Đây là iphone vip pro."
},
{
  "kind": "IPhone",
  "img": "hinh-anh-iphone-x-plus-voi-3-camera-sau-khien-cac-fan-phat-cuong-1.jpg",
  "name": "IPhone XS MAX",
  "price": 32000000,
  "mota": "Đây là iphone vip pro."
},

{
    "kind": "SAMSUNG",
    "img": "Samsung-Galaxy-S21-Ultra-color-negro.jpg",
    "name": "Samsung Galaxy S21 Ultra",
    "price": 22000000,
    "mota": "Đây là iphone vip pro."
},

]
}
