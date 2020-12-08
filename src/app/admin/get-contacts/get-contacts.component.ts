import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-get-contacts',
  templateUrl: './get-contacts.component.html',
  styleUrls: ['./get-contacts.component.css']
})
export class GetContactsComponent implements OnInit {
  msg=""
  contacts=[]
  constructor(private ps:ContactsService) { 
    this.ps.allContacts().then(result=>{
      this.contacts=result

    }).catch(err=>{
      this.msg="error when loading contacts data \n" + err
    })
  }
  // product-get.component.ts

deleteContact(id) {
  this.ps.deleteContact(id).subscribe(res => {
    this.contacts.splice(id, 1);
  });
}

  ngOnInit(): void {
  }

}
