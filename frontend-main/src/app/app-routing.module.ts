import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminguardGuard } from './authguard/adminguard.guard';
import { AuthGuard } from './auth.guard';
import { CourseComponent } from './course/course.component';
import { LoginComponent } from './login/login.component';
import { MaterialComponent } from './material/material.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';
import { ShowMaterialComponent } from './show-material/show-material.component';
import { TableComponent } from './table/table.component';
import { YourCoursesComponent } from './your-courses/your-courses.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"register/:id",component:RegisterComponent},
  {path:"course",component:CourseComponent,canActivate:[AuthGuard]},
  {path:"material",component:MaterialComponent,canActivate:[AdminguardGuard]},
  {path:"material/:id",component:MaterialComponent,canActivate:[AdminguardGuard]},
  {path:"table",component:TableComponent,canActivate:[AdminguardGuard]},
  {path:"pay/:course_id",component:PaymentComponent,canActivate:[AuthGuard]},
  {path:"edit/:id",component:ShowMaterialComponent,canActivate:[AuthGuard]},
  {path:"yourCourses/:id",component:YourCoursesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
