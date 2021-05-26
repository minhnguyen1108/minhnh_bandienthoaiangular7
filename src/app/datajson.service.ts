import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DatajsonService {
  // tạo 1 biến chứa file json
  private apiUrl = '/assets/data/prods.json';
  // Khai báo httpclient
  constructor(private http: HttpClient) { }
  // tạo hàm get dữ liẹu 
  // cái này trả vef mảng chứa json
  getDulieu(): Observable<any[]>{ 
    // sử dụng get trong httpclient
    return this.http.get<any[]>(this.apiUrl);
  }
  //
}
