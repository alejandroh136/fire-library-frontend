import { Component, OnDestroy, OnInit } from '@angular/core';
import { Order } from "../Models/order";
import { MyBooksService } from '../services/my-books.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { Book } from '../Models/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit, OnDestroy {
  private authListener : Subscription | null = null;
  customerId = -1;
  loggedIn = false;
  myOrders : Order[] = [];
  private url:string = "https://firelibrarydocker.azurewebsites.net/api/Customer/Orders?customerId="; // TODO: dynamically populate customerId here
  private returnBookurl:string = "https://firelibrarydocker.azurewebsites.net/api/Orders/returnbook"; // TODO: dynamically populate customerId here
  constructor(private myBooksService:MyBooksService, private auth:AuthService) { 
    this.authListener = this.auth.getAuthStatusListener().subscribe(value=>{
      this.loggedIn = value;
      this.customerId = auth.getId();
    })
  }

  ngOnInit(): void {
    this.myBooksService.getBooksFromOrder(this.url+this.customerId).subscribe((Res) => {
      this.myOrders = Res;
      
      let displayOrders: Order[] = []
      
      for(let i = 0; i < this.myOrders.length; i++){
        let books: Book[] = this.myOrders[i].books;
        console.log(books)
        if(books.length > 0){
          displayOrders.push(this.myOrders[i])
        }
      }
      this.myOrders = displayOrders
      console.log(this.myOrders)
        
    });
  }

  ngOnDestroy(): void {
    this.authListener?.unsubscribe();
  }
  onClickReturn(book:Book,orderid:number){
    console.log(orderid);
    this.myBooksService.postReturnBook(this.returnBookurl, orderid,book.isbn).subscribe((res)=>{
      console.log(res);
      this.ngOnInit();
    });
  }
}
