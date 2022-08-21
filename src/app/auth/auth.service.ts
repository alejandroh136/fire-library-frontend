import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class AuthService{
    //change firelibraryv2 to firelibrarydocker.azur...
    private login_url = 'https://firelibrarydocker.azurewebsites.net/api/Users/login';
    private register_url = 'https://firelibrarydocker.azurewebsites.net/api/Users/register';
    private isAuthenticated = false;
    private token: string|null = null;
    private customerId:number = -1;
    private time2live:number = -1;
    private authStatusListener = new BehaviorSubject<boolean>(false);
    constructor(private http: HttpClient, private router:Router){}
    getToken(){
        return this.token;
    }
    checkAuth(){
        return this.isAuthenticated
    }
    getAuthStatusListener(){
        return this.authStatusListener.asObservable();
    }
    getId():number{
        return this.customerId;
    }
    createUser(username:string, password:string){
        const data = {username:username, password:password}
        this.http.post<any>(this.register_url, data).subscribe(resp=>{
            console.log(resp);
            this.token = resp.token;
            this.customerId = resp.customerId;
            this.time2live = resp.timeInSecs;
        })
        this.router.navigate(['/login']);
    }
    login(username:string, password:string){
        var myheaders = new HttpHeaders();
        myheaders.append("Content-Type","application/json")
        //console.log(username);
        //console.log(password);
        const data = {username:username, password:password}
        //this.http.post<any>(this.login_url, data, {"headers":myheaders}).subscribe(resp=>{
            this.http.post<any>(this.login_url, data).subscribe(resp=>{
            console.log(resp);
            this.token = resp.token;
            this.customerId = resp.customerId;
            this.time2live = resp.timeInSecs;
            
            if(this.token == null){
                return;
            }

            this.isAuthenticated = true;
            this.authStatusListener.next(true);
            this.router.navigate(['/home']);
        })
    }

    logout(){
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        this.router.navigate(['/home']);
    }
}