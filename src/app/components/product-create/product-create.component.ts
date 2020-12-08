import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import{FormGroup,FormBuilder,Validators,FormControl} from '@angular/forms';
import{ContactsService} from "../../services/contacts.service";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  
  

  constructor( private us:ContactsService) { }
  

msg = new FormControl("");

addContact(name,number,job,location){
  //logic

  this.us.addContact(name,number,job,location)
  // .then(resp=>{
  //   if(resp['success']){
  //     localStorage.setItem("token",resp['token']);
  //     this.msg.setValue("User Added Successfully");
      
  //   }
  // }).catch(err=>{
  //  this.msg.setValue("Error:" + err.message);
  // })
}

  ngOnInit(): void {
  }

  

  // createProduct(): void {
  //   const data = {
  //     name: this.product.name,
  //     number: this.product.number,
  //     job:this.product.job,
  //     location:this.product.location
  //   };

  //   this.productService.create(data)
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.submitted = true;
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  // newProduct(): void {
  //   this.submitted = false;
  //   this.product = {
  //     name: '',
  //     number: '',
  //     job:'',
  //     location:''
  //   };
  // }

}