import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm ,Validators,FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers:[UserService]
})
export class RegisterComponent implements OnInit {
  userForm:FormGroup|any;
  
  constructor(public userService:UserService,public router:Router,private fb:FormBuilder,private route:ActivatedRoute){
    this.userForm=this.fb.group({
      name:new FormControl('',[Validators.required,Validators.pattern('^[A-Za-z]{1,10}$')]),
      email:new FormControl('',[Validators.required,Validators.pattern('([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})(\.[a-zA-Z]{2,5})?$')]),
      phone:new FormControl('',[Validators.required,Validators.pattern('^[6-9]\d{9}$')]),
      user_type:new FormControl('User',[Validators.required]),
      password:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9!@#$%^&*]{6,16}$')])

    })
  }
  ngOnInit(): void {
    
     }
     get name(){
      return this.userForm.get('name');
    }
    get email(){
      return this.userForm.get('email');
    }
    get phone(){
      return this.userForm.get('phone');
    }
    get user_type(){
      return this.userForm.get('user_type');
    }
    get password(){
      return this.userForm.get('password');
    }

    onSubmit(form: FormGroup) {
    
          this.userService.postUser(form.value).subscribe((res) => {
            console.log(res);
          });
  
      }
}
