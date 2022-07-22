import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Material } from './material.model'
import { Router } from '@angular/router';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  materials: Material[] = [];
  courseId: number = 0;
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
    return this.http.get(this.baseURL + `/${_id}` + `/courseId`);
  }
  getCost(course: number) {
    return this.http.get(this.baseURL + `/${course}` + `/cost` + `/courseCost`);
  }
  checkCourseId(courseId:any){
    return this.http.get(this.baseURL + `/${courseId}` + `/courseId` + `/check`+`/checkCourseId`); 
  }
  getDomain(courseId:any){
    return this.http.get(this.baseURL+`/${courseId}`+`/get`+`/domain`+`/name`+`/getDomainName`);
  }
  
  set setCourse(val: number) {
    this.courseId = val;
  }
  get getCourse() {
    return this.courseId;
  }

  set setCourseId(val: number) {
    this.courseId = val;
  }
  get getCourseID() {
    return this.courseId;
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

