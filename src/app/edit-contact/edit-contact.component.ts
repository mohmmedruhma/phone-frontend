import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import{ContactsService} from "../services/contacts.service";
@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  angForm: FormGroup;
  contact: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private ps: ContactsService, private fb: FormBuilder) {
    this.createForm();
   }

   createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      number: ['', Validators.required ],
      job: ['', Validators.required ],
      location: ['',Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ps.editContact(params.id).subscribe(res => {
        this.contact = res;
    });
  });
  }

  updateContact(name, number, job,location) {
    this.route.params.subscribe(params => {
      this.ps.updateContact(name, number, job ,location, params.id);
      this.router.navigate(['contacts']);
    });
  }

 

}
