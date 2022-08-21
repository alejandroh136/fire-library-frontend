import { Component, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  private authListener : Subscription | null = null;
  loggedIn = false;
  constructor(private auth:AuthService) { 

  this.authListener = this.auth.getAuthStatusListener().subscribe(value=>{
    this.loggedIn = value;
  })
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.authListener?.unsubscribe();
  }
  onLogout(){
    this.auth.logout();
  }
}
