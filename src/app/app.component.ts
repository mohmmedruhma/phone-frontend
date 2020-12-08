import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'phone-book-number';
  userAuthenticated = localStorage.getItem("token");
  isAdmin = localStorage.getItem("username")=="admin"

  constructor(){
    
  }
}
