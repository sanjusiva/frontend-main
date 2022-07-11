import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminguardGuard } from './authguard/adminguard.guard';
import { AuthGuard } from './auth.guard';
import { ChatComponent } from './chat/chat.component';
import { CourseComponent } from './course/course.component';
import { LoginComponent } from './login/login.component';
import { MaterialComponent } from './material/material.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';
import { ShowMaterialComponent } from './show-material/show-material.component';
import { TableComponent } from './table/table.component';
import { ChatMsgComponent } from './chat-msg/chat-msg.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"course",component:CourseComponent,canActivate:[AuthGuard]},
  {path:"material",component:MaterialComponent},
  {path:"material/:id",component:MaterialComponent},
  {path:"table",component:TableComponent},
  {path:'chat',component:ChatComponent},
  // {path:'chat',component:ChatMsgComponent},
  {path:"pay/:course",component:PaymentComponent},
  {path:"edit/:Domain/:course",component:ShowMaterialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
