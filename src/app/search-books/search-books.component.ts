import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

import { Book } from '../Models/book';
import { CartService } from '../services/cart.service';
import { SearchBooksService } from '../services/search-books-result.service';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent implements OnInit, OnDestroy {

  public loggedIn = false;
  private authListener: Subscription|null = null;

  searchForm = this.formBuilder.group({
    searchBy: '',
    searchFor: ''
  });
  books : Book[] = [];
  private url:string = "https://firelibrarydocker.azurewebsites.net/api/Books/search/"
  constructor(private formBuilder: FormBuilder, private searchBooksService:SearchBooksService,private auth:AuthService, private cart:CartService) {
    this.authListener = this.auth.getAuthStatusListener().subscribe(value=>{
      this.loggedIn = value;
    })
   }
  // constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // Process search data here

    console.log('Your request will be submitted', this.searchForm.value);
    let formData = this.searchForm.value;
    let searchBy = formData['searchBy'];
    let searchFor = formData['searchFor'];
    let searchUrl = this.url + searchBy + "?" + searchBy + "=" + searchFor;
    console.log('URL to find books: ', searchUrl);
    if (searchBy == "isbn") {
      this.searchBooksService.getSingleBook(searchUrl).subscribe((Res) => {
        this.books = [Res];
      });
    } else {
      this.searchBooksService.getAllBooks(searchUrl).subscribe((Res) => {
        this.books = Res;
      });
    }
    this.searchForm.reset();
  }
  addBook(book:Book){
    
    var index = this.cart.getBooksInCart().findIndex(a => a.isbn == book.isbn);
    if(index < 0){//only add if book does not exists | basically look for book and get the index | findIndex returns -1 when not found
      this.cart.addToCart(book);
      console.log(this.cart.getBooksInCart());
    }
  }
  ngOnDestroy(): void {
    this.authListener?.unsubscribe();
  }
}
