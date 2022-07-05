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
  course_id: any;
  cost: any;
  matId: any;
  matVal: any;
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

  getMaterial(Domain: string | null, course: string | null) {
    return this.http.get(this.baseURL + `/${Domain}` + `/${course}`);
  }

  getCourseId(Domain: string | null) {
    return this.http.get(this.baseURL + `/${Domain}`);
  }

  getWithout(Domain: string | null) {
    console.log(this.http.get(this.baseURL + `/${Domain}`));
  }

  putMaterial(mat: Material) {
    return this.http.put(this.baseURL + `/${this.getMatId}`, mat);
  }

  putMaterialList(id: any, mat: Material) {
    return this.http.put(this.baseURL + `/${id}`, mat);
  }

  deleteMaterial(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

  getId(mat: Material) {
    return mat._id
  }

  set setCourse(val: string) {
    this.course_id = val;
  }
  get getCourse() {
    return this.course_id;
  }
  getCost(course: string) {
    console.log("dddd");
    // const courses = course;
    // return this.http.get(this.baseURL + `${courses}`);
    return this.http.get(this.baseURL + `/${course}` + `/${course}` + `/${course}`);
    // return this.http.get(`/${this.baseURL}` + `/${course}` + `/${course}` + `/${course}`);

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

  set setMat(val: any) {
    this.matVal = val.value;
  }
  get getMat() {
    return this.matVal;
  }

}


