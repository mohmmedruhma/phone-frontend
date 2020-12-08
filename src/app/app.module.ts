import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import{UsersService} from './services/users.service';
import { GetUsersComponent } from './admin/get-users/get-users.component';
import { GetContactsComponent } from './admin/get-contacts/get-contacts.component';
import { AdminComponent } from './admin/admin.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';





@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    GetUsersComponent,
    GetContactsComponent,
    AdminComponent,
    ProductCreateComponent,
    ProductListComponent,
    EditContactComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
