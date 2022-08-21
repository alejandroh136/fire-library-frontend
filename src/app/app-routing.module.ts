import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyBooksComponent } from './my-books/my-books.component';
import { TemplateComponent } from './template/template.component';
import { LoginComponent } from './auth/login/login.component';
import { CartComponent } from './cart/cart.component';
import { SearchBooksComponent } from './search-books/search-books.component';
import { SignupComponent } from './auth/signup/signup.component';
const routes: Routes = [
  {path: '',pathMatch:'full', redirectTo:'home'},
  {path: 'home', component: HomeComponent},
  {path: 'myBooks', component: MyBooksComponent},
  {path: 'template', component: TemplateComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cart', component: CartComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'searchBooks', component: SearchBooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
