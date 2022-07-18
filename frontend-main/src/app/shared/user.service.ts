import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model'
import { NgForm } from '@angular/forms';
import { MaterialService } from './material.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser!: User;
  users: User[] = [];
  public username: string = "";
  readonly baseURL = 'http://localhost:3000/users';
  name: string = "";
  role: string = "";
  course_id: number=0;

  constructor(private http: HttpClient) { }


  postUser(user: User) {
    return this.http.post(this.baseURL, user);
  }

  getUserList() {
    return this.http.get(this.baseURL);
  }

  getUsername(loginForm: NgForm) {
    return this.http.post(this.baseURL + `/login`, loginForm);
  }

  set showUser(val: string) {
    this.name = val;
  }
  get getUser() {
    return this.name;
  }
  getPaidCourse(course: number ) {
    return this.http.get(this.baseURL + `/${course}` + `/${this.name}` + `/list`);
  }
  buyCourse(course: any, name: string,) {
    return this.http.put(this.baseURL + `/${course}` + `/${name}`, User);
  }

  set setUserRole(val: string) {
    this.role = val;
  }
  get getUserRole() {
    return this.role;
  }

  loggedIn() {
    return this.getUserRole
  }

  logged() {
    return !!localStorage.getItem('token')
  }

  fetchToken() {
    return localStorage.getItem('token')
  }
}
