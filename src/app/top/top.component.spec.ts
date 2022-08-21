import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { BooksService } from '../services/books.service';
import { CartService } from '../services/cart.service';

import { TopComponent } from './top.component';
let authServiceStub: Partial<AuthService>;
let cartServiceStub: Partial<CartService>;
let booksServiceStub: Partial<BooksService>;
let fakeObserve = new BehaviorSubject<boolean>(false);
//let fakeBooksObserve = new Subject<Book[]>;
authServiceStub = {
  getAuthStatusListener(){return fakeObserve;}
}
describe('TopComponent', () => {
  let component: TopComponent;
  let fixture: ComponentFixture<TopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopComponent ],
      providers:[{provide:AuthService, useValue:authServiceStub}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
