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
  id:string="";
  editId:string|null="";
  role: string = "";
  course_id: number=0;

  constructor(private http: HttpClient) { }


  postUser(user: User) {
    return this.http.post(this.baseURL, user);
  }
  putUser(user:User){
    return this.http.put(this.baseURL + `/${this.getEditId}`, user);
  }
  getUserList() {
    return this.http.get(this.baseURL);
  }

  getUsername(loginForm: NgForm) {
    return this.http.post(this.baseURL + `/login`, loginForm);
  }

  getPaidCourse(course: number ) {
    return this.http.get(this.baseURL + `/${course}` + `/${this.name}` + `/list`);
  }
  buyCourse(course: any, name: string,) {
    return this.http.put(this.baseURL + `/${course}` + `/${name}`, User);
  }
  getThatUser(id:string|null){
    return this.http.get(this.baseURL + `/${id}`);
  }

  set showUser(val: string) {
    this.name = val;
  }
  get getUser() {
    return this.name;
  }
  set setUserRole(val: string) {
    this.role = val;
  }
  get getUserRole() {
    return this.role;
  }
  set setUserId(val: string) {
    this.id = val;
  }
  get getUserId() {
    return this.id;
  }
  set setEditId(val: string|null) {
    this.editId = val;
  }
  get getEditId() {
    return this.editId;
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
