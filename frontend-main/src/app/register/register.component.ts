import { Component,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  userForm: FormGroup | any;
  user:User[]=[];
  id:string|null="";

  constructor(public userService: UserService, public router: Router, private fb: FormBuilder, private route: ActivatedRoute) {
    this.userForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9 _.]{3,15}$')]),
      email: new FormControl('', [Validators.required, Validators.pattern('([a-z0-9-_\.]+)@([a-z0-9]+)\.([a-z]{2,5})(\.[a-z]{2,5})?$')]),
      phone: new FormControl('', [Validators.required, Validators.pattern("^[6-9]{1}[0-9]{9}$")]),
      userType: new FormControl('User', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9!@#$%^&*]{6,16}$')])
    })
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      var id = params.get('id');
      this.id=id;
     this.userService.setEditId = id;
     if (this.userService.logged()) {
      this.onEdit(id);   
     }
    });
  }
  get name() {
    return this.userForm.get('name');
  }
  get email() {
    return this.userForm.get('email');
  }
  get phone() {
    return this.userForm.get('phone');
  }
  get userType() {
    return this.userForm.get('userType');
  }
  get password() {
    return this.userForm.get('password');
  }

  onSubmit(form: FormGroup) {
    if(!this.userService.getEditId){
      this.userService.postUser(form.value).subscribe((res:any) => {
        alert(res['message']);
        this.router.navigate(['']);
      });
    }
    else{ 
      this.userService.putUser(form.value).subscribe((res:any) => {
        alert(res['message'])
        this.router.navigate(['/course']);
      });
    }

  }
  resetValues() {
    this.userForm.reset();
    this.userForm.get('userType').setValue('User');

  }
  onEdit(id: any) {
      this.userService.getThatUser(id).subscribe(
        (res: any) => this.editUser(res),
        (err: any) => alert(err)
      );
  }
  editUser(user:User){
    this.userForm.patchValue({
      name:Object.values(user)[0][0].name,
      email:Object.values(user)[0][0].email,
      phone:Object.values(user)[0][0].phone,
      password:Object.values(user)[0][0].password,
      userType:Object.values(user)[0][0].userType
    })
  }
}
