import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject, Subject,Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Book } from '../Models/book';
import { Order } from '../Models/order';
import { BooksService } from '../services/books.service';
import { MyBooksService } from '../services/my-books.service';
import { CartService } from '../services/cart.service';

import { MyBooksComponent } from './my-books.component';

let authServiceStub: Partial<AuthService>;
let cartServiceStub: Partial<CartService>;
let booksServiceStub: Partial<MyBooksService>;
let fakeObserve = new BehaviorSubject<boolean>(false);
let fakeBooksObserve = new Subject<Book[]>;
let fakeOrderObserve = new Subject<Order[]>;
authServiceStub = {
  getAuthStatusListener(){return fakeObserve;}

}
booksServiceStub = {
  //getAllBooks(url:string):Observable<Book[]>{return fakeBooksObserve;}
  getBooksFromOrder(url:string):Observable<Order[]>{return fakeOrderObserve;}
}

describe('MyBooksComponent', () => {
  let component: MyBooksComponent;
  let fixture: ComponentFixture<MyBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBooksComponent ],
      providers:[{provide:MyBooksService, useValue:booksServiceStub},
      {provide:AuthService, useValue:authServiceStub}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
