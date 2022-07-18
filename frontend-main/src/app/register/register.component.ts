import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [UserService]
})
export class RegisterComponent{
  userForm: FormGroup | any;
  
  constructor(public userService: UserService, public router: Router, private fb: FormBuilder, private route: ActivatedRoute) {
    this.userForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9]{3,15}$')]),
      email: new FormControl('', [Validators.required, Validators.pattern('([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})(\.[a-zA-Z]{2,5})?$')]),
      phone: new FormControl('', [Validators.required, Validators.pattern("^[6-9]{1}[0-9]{9}$")]),
      userType: new FormControl('User', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9!@#$%^&*]{6,16}$')])

    })
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

    this.userService.postUser(form.value).subscribe((res) => {
      alert(Object.values(res)[0]);
      this.router.navigate(['']);
    });

  }
  resetValues() {
    this.userForm.reset();
  }
}
