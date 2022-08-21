import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopComponent } from './top/top.component';
import { BooksComponent } from './books/books.component';
import { TemplateComponent } from './template/template.component';
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyBooksComponent } from './my-books/my-books.component';
import { CartComponent } from './cart/cart.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SearchBooksComponent } from './search-books/search-books.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopComponent,
    BooksComponent,
    TemplateComponent,
    LoginComponent,
    MyBooksComponent,
    CartComponent,
    SignupComponent,
    MyBooksComponent,
    SearchBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  exports:[AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
