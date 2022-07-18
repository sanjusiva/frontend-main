import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CourseComponent } from './course/course.component';
import { MaterialComponent } from './material/material.component';
import { PaymentComponent } from './payment/payment.component';
import { User } from './shared/user.model';
import { UserService } from './shared/user.service';
import { TableComponent } from './table/table.component';
import { ShowMaterialComponent } from './show-material/show-material.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { TokenCheckingService } from './shared/token-checking.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CourseComponent,
    MaterialComponent,
    PaymentComponent,
    TableComponent,
    ShowMaterialComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserService,AuthGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenCheckingService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
