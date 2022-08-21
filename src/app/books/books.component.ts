import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../Models/book';
import { BooksService } from '../services/books.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit, OnDestroy {
  books : Book[] = []
  //private url:string = "https://firelibraryapi.azurewebsites.net/api/books";
  private url:string = "https://firelibrarydocker.azurewebsites.net/api/Books";
  public loggedIn = false;
  private authListener: Subscription|null = null; 

  constructor(private mybooksService:BooksService, private auth:AuthService, private cart:CartService) { 
    this.authListener = this.auth.getAuthStatusListener().subscribe(value=>{
      this.loggedIn = value;
    })
  }

  ngOnInit(): void {
    this.mybooksService.getAllBooks(this.url).subscribe((Res) => {
      this.books = Res;
    });
  }
  ngOnDestroy(): void {
    this.authListener?.unsubscribe();
  }
  addBook(book:Book){
    
    var index = this.cart.getBooksInCart().findIndex(a => a.isbn == book.isbn);
    if(index < 0){//only add if book does not exists | basically look for book and get the index | findIndex returns -1 when not found
      this.cart.addToCart(book);
      console.log(this.cart.getBooksInCart());
    }
  }
}
