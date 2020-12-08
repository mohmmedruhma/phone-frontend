import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import {UsersService} from '../services/users.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  msg = new FormControl("");

  constructor(private fb:FormBuilder, 
    private us:UsersService,
    private route:Router) { 
      if(localStorage.getItem("token")==null){
        //login
        this.createForm();
      }else{
        //logout
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        this.route.navigate(["/"]);
        //refresh page
        window.open("/","_self");
      }
    
  }


  createForm() {
    this.loginForm = this.fb.group({
      username :['',Validators.required],
      password :['',Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(/\w{5,14}/)
      ])],
    }
    );//loginform controls/validation 
  } 

  login(username,password){
    //logic
    this.us.login(username,password)
    .then(resp=>{
      if(resp['success']){
        localStorage.setItem("token",resp['token']);
        localStorage.setItem("username",username);
        if(username=="admn"){
          this.route.navigate(['/admin']);
          window.open("/admin","_self");
        }else
        this.route.navigate(['/'])
         //refresh page
         window.open("/","_self");
        //this.msg.setValue("Login Successfully");
      }else{
        this.msg.setValue("username or password incorrect");
      }
    }).catch(err=>{
     this.msg.setValue("Error:" + err.message);
    })
    
  }

  ngOnInit(): void {
  }

}
