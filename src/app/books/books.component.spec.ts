import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { BooksService } from '../services/books.service';
import { CartService } from '../services/cart.service';
import { BooksComponent } from './books.component';
import {Book} from '../Models/book';

let authServiceStub: Partial<AuthService>;
let cartServiceStub: Partial<CartService>;
let booksServiceStub: Partial<BooksService>;
let fakeObserve = new BehaviorSubject<boolean>(false);
let fakeBooksObserve = new Subject<Book[]>;
authServiceStub = {
  getAuthStatusListener(){return fakeObserve;}

}
booksServiceStub = {
  getAllBooks(url:string):Observable<Book[]>{return fakeBooksObserve;}
}
describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksComponent ],
      providers:[{provide: AuthService, useValue:authServiceStub},
        {provide:CartService, useValue:cartServiceStub},
        {provide: BooksService, useValue:booksServiceStub}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
