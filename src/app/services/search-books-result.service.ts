import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Book } from "../Models/book";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class SearchBooksService {
  constructor(private http:HttpClient){}
  getAllBooks(url:string): Observable<Book[]>{
    return this.http.get<Book[]>(url);
  }
  getSingleBook(url:string): Observable<Book>{
    return this.http.get<Book>(url);
  }
}
