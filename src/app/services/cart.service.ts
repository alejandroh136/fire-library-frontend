import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Book } from "../Models/book";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { Checkout } from "../Models/checkout";


@Injectable({providedIn: 'root'})
export class CartService{
    private books:Book[]=[];
    private bookListener = new BehaviorSubject<Book[]>([]);
    constructor(private http:HttpClient){}
    getBooksInCart():Book[]{
        return this.books;
    }
    addToCart(book:Book){
        this.books.push(book);
    }
    getBooksListener(){
        return this.bookListener.asObservable();
    }
    postOrder(posturl:string,data:Checkout){
        return this.http.post(posturl,data,{responseType:'text'});
    }
    clearCart(){
        this.books = [];
        this.bookListener.next([]);
    }
}