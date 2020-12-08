import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import Users from '../models/Usesrs.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  api = "http://localhost:3007/users/"

  constructor(private http:HttpClient) { }

  addUser(username,email,password){
    //call api
    
    const user ={
      username:username,
      email:email,
      password:password
    };

    return this.http.post(this.api+"user",user,{}).toPromise();

  }

  login(username,password){
    //call api
    let headersVal = new HttpHeaders()
    .set("username",username)
    .set("password",password);
    return this.http.get(this.api+"login",{headers:headersVal}).toPromise();
    
  }
  allUsers(){
    let headersVal = new HttpHeaders()
    .set("x-auth-token",localStorage.getItem("token"));
    
    return this.http.get<Users[]>(this.api+"user",{headers:headersVal}).toPromise();
  }
  
}



// this.http.post(api+"user",user,{}).subscribe(resp =>{
    //   if(resp['success'] == true)
    //   localStorage.setItem("token",resp['token']);
    //   else
    //   console.log(resp);

    // },err=>{
    //   console.log("err=");
    //   console.log("err name :" + err.name);

    // })
