import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser!: User;
  users: User[] = [];
  public username: string ="";
  //currentUser:string='';
  readonly baseURL = 'http://localhost:3000/users';
  name: string="";


  constructor(private http: HttpClient) { }


  postUser(user: User) {

    return this.http.post(this.baseURL, user);
  }

  getUserList() {
    return this.http.get(this.baseURL);
  }

  // putUser(user: User) {
  //   console.log("putttt 1");
  //   console.log(user._id);

  //   return this.http.put(this.baseURL + `/${user._id}`, user);
  // }

  // deleteUser(_id: string) {
  //   return this.http.delete(this.baseURL + `/${_id}`);
  // }

  getUsername(username: string, password: string) {
    this.username=username;
    console.log(this.username);
    return this.http.get(this.baseURL + `/${username}` + `/${password}`);
  }

 set showUser(val:string){
    this.name=val;
    console.log("show username"+this.username);
    console.log("show name"+this.name);
  }
  get getUser(){
    console.log("get "+this.name);
    
    return this.name;
  }
  getPaidCourse(course:string|null){
    console.log("course"+course);
    
    return this.http.get(this.baseURL+`/${course}`+`/${this.name}`+`/${this.name}`);
  }
  buyCourse(course:any,name:string,){
    console.log(course);
    return this.http.put(this.baseURL+`/${course}`+`/${name}`,User);
    
  }
}
