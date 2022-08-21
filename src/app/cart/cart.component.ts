import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import {CartService} from '../services/cart.service';
import { Book } from '../Models/book';
import { Checkout } from '../Models/checkout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private authListener : Subscription | null = null;
  booksInCart : Book[] = [];
  private checkout:Checkout|null = null;
  customerId = -1;
  loggedIn = false;
  private url:string = "https://firelibrarydocker.azurewebsites.net/api/orders";
  constructor(private cart:CartService, private auth:AuthService,private router:Router) { 
    this.authListener = this.auth.getAuthStatusListener().subscribe(value=>{
      this.loggedIn = value;
      this.customerId = auth.getId();
    })
  }

  ngOnInit(): void {
    this.booksInCart = this.cart.getBooksInCart();
    this.checkout = new Checkout(this.customerId,this.booksInCart);
  }
  
  onCheckout(){
    console.log("we called onCHeckout");
    console.log(this.checkout);
    this.cart.postOrder(this.url,this.checkout!).subscribe((res) => {
      console.log(res);//assumed it worked for now
    })
    this.cart.clearCart();
    this.router.navigate(['/home']);
  }
}
