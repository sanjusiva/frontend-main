import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers:[UserService]
})
export class RegisterComponent implements OnInit {
  value:string="User";
  constructor(public userService:UserService,public router:Router){}
  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.userService.selectedUser= {
      _id:'',
    // user_id: 0,
    user_name:'',
    email:'',
    phone:'',
    password:'',
    paidCourse_id:[],
    user_type:'User'
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.userService.postUser(form.value).subscribe((res) => {
       if(JSON.stringify(res).slice(18,22)){
        alert("Duplicate Entries.")
       }
        this.resetForm(form);
      });
    }
    
  }

}
