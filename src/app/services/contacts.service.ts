import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpResponse,HttpHandler,} from "@angular/common/http";
import Contacts from '../models/Contacts.model';



@Injectable({
  providedIn: 'root'
})

export class ContactsService {
api = "http://localhost:3007/contacts";
  constructor(private http:HttpClient) { }

  allContacts(){
    let headersVal = new HttpHeaders()
    .set("x-auth-token",localStorage.getItem("token"));
    
    return this.http.get<Contacts[]>(this.api,{headers:headersVal}).toPromise();
  }

  // deleteContact(id) {
  //   let headersVal = new HttpHeaders()
  //   .set("x-auth-token",localStorage.getItem("token"));
  //   //let url = `${this.baseUri}/delete/${id}`;
  //   return this.http.delete(this.api+":id", { headers:headersVal }).toPromise();
  // }

  // addContact(name,number,job,location){
  //   //call api

  //   const contact ={
  //     name:name,
  //     number:number,
  //     job:job,
  //     location:location
  //   };

  //   return this.http.post(this.api,contact,{}).toPromise();

  // }



  addContact(name, number, job,location) {
    console.log(name, number, job,location);
    const obj = {
      name, number, job,location
    };
    this.http.post(`${this.api}`, obj)
        .subscribe(res => console.log('Done'));
  }

  getContacts() {
    return this
           .http
           .get(`${this.api}`);
  }

  editContact(id) {
    return this
            .http
            .get(`${this.api}/${id}`);
  }

  updateContact(name, number, job,location, id) {
    const obj = {
      name, number, job,location
    };
    this
      .http
      .post(`${this.api}/${id}`, obj)
      .subscribe(res => console.log('Update Complete'));
  }

  deleteContact(id) {
    return this
              .http
              .get(`${this.api}/${id}`);
  }
 



}
