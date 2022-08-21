import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Order } from "../Models/order";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MyBooksService {
  constructor(private http:HttpClient){}
  getBooksFromOrder(url:string): Observable<Order[]>{
    return this.http.get<Order[]>(url);
  }
  postReturnBook(postReturnurl:string,orderid:number,isbn:string){
    return this.http.post(postReturnurl,{orderId:orderid,isbn:isbn},{responseType:'text'});
  }
  
}
