import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { CourseComponent } from './course/course.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { MaterialComponent } from './material/material.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"course",component:CourseComponent},
  {path:"material",component:MaterialComponent},
  {path:"material/:id",component:MaterialComponent},
  {path:"table",component:TableComponent},
  {path:'chat',component:ChatComponent},
  {path:"pay/:course",component:PaymentComponent},
  {path:"edit/:Domain/:course",component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
