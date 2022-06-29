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
    //console.log(mat +"2");

    return this.http.post(this.baseURL, mat);
  }

  getThatMat(id: any) {
    console.log(id);

    return this.http.get(this.baseURL + `/${id}`);

  }

  getMaterialList() {
    return this.http.get(this.baseURL);
  }

  getMaterial(Domain: string | null, course: string | null) {
    console.log("Domain" + Domain);
    console.log("course" + course);

    return this.http.get(this.baseURL + `/${Domain}` + `/${course}`);
  }

  getCourseId(Domain: string | null) {
    return this.http.get(this.baseURL + `/${Domain}`);
  }

  getWithout(Domain: string | null) {
    console.log("getwithout" + Domain);

    console.log(this.http.get(this.baseURL + `/${Domain}`));
  }

  putMaterial(mat: Material) {
    console.log("putttt 1");
    console.log(this.getMatId);
    return this.http.put(this.baseURL + `/${this.getMatId}`, mat);
  }

  putMaterialList(id: any, mat: Material) {
    console.log("putttt 1");
    console.log(id);
    console.log(this.getMat);
    console.log("ethuthaa" + mat);
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
    console.log("show name" + this.course_id);
  }
  get getCourse() {
    console.log("get " + this.course_id);

    return this.course_id;
  }
  getCost(course: string) {
    console.log(course);

    return this.http.get(this.baseURL + `/${course}` + `/${course}` + `/${course}`);
  }
  set setCCost(val: any) {
    this.cost = val;
    console.log("show name" + this.cost);
  }
  get getCCost() {
    console.log("get " + this.cost);

    return this.cost;
  }

  set setMatId(val: any) {
    this.matId = val;
    console.log("show name" + this.matId);
  }
  get getMatId() {
    console.log("get " + this.matId);

    return this.matId;
  }

  set setMat(val: any) {
    this.matVal = val.value;
    console.log("show name" + JSON.stringify(this.matVal));
  }
  get getMat() {
    console.log("get " + this.matVal);

    return this.matVal;
  }

}


