import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Material } from './material.model'
import { Router } from '@angular/router';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  selectedMaterial!: Material;
  materials: Material[] = [];
  userName: string = '';
  course_id: number = 0;
  cost: number = 0;
  matId: string = '';
  readonly baseURL = 'http://localhost:3000/materials';


  constructor(private http: HttpClient, private router: Router, private userService: UserService) { }


  postMaterial(mat: Material) {
    return this.http.post(this.baseURL, mat);
  }

  getThatMat(id: any) {
    return this.http.get(this.baseURL + `/${id}`);
  }

  getMaterialList() {
    return this.http.get(this.baseURL);
  }

  putMaterial(mat: Material) {
    return this.http.put(this.baseURL + `/${this.getMatId}`, mat);
  }

  deleteMaterial(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
  getCourseId(_id: string | null) {
    return this.http.get(this.baseURL + `/${_id}` + `/course_id`);
  }
  getCost(course: number) {
    return this.http.get(this.baseURL + `/${course}` + `/cost` + `/courseCost`);
  }
  checkCourseId(courseId:any){
    return this.http.get(this.baseURL + `/${courseId}` + `/courseId` + `/check`+`/checkCourseId`); 
  }
  
  set setCourse(val: number) {
    this.course_id = val;
  }
  get getCourse() {
    return this.course_id;
  }

  set setCourseId(val: number) {
    this.course_id = val;
  }
  get getCourseID() {
    return this.course_id;
  }

  set setCCost(val: any) {
    this.cost = val;
  }
  get getCCost() {
    return this.cost;
  }

  set setMatId(val: any) {
    this.matId = val;
  }
  get getMatId() {
    return this.matId;
  }
}


