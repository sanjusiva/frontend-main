import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CourseComponent } from './course/course.component';
import { MaterialComponent } from './material/material.component';
import { EditComponent } from './edit/edit.component';
import { PaymentComponent } from './payment/payment.component';
import { User } from './shared/user.model';
import { UserService } from './shared/user.service';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CourseComponent,
    MaterialComponent,
    EditComponent,
    PaymentComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
