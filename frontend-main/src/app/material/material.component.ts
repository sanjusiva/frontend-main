import { Component, OnInit, TestabilityRegistry } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Material } from '../shared/material.model';
import { MaterialService } from '../shared/material.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss'],
  providers:[MaterialService]
})
export class MaterialComponent implements OnInit {
  _id:any;
  course_id :any;
  Domain : any;
  link1 : any;
  link2 : any;
  link3 : any;
  video1: any;
  video2: any;
  video3: any;
  cost:any;
  newData:boolean=false;
  constructor(public materialService:MaterialService,public router:Router,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.resetForm();
    this.refreshEmployeeList();
    this.route.paramMap.subscribe(params => {
      var id = params.get('id');
      
      console.log(id);    
      this.materialService.setMatId=id; 
      this.onEdit(id);
    });
}
    
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.materialService.selectedMaterial= {
      _id:"",
      course_id :"",
      Domain : "",
      link1 : "",
      link2 : "",
      link3 : "",
      video1: "",
      video2: "",
      video3: "",
      cost:0
    }
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.materialService.setMat=form;
    console.log(this._id);
    console.log(this.materialService.getMatId);   
    if (!this.materialService.getMatId) {
      console.log("here");
      
      this.materialService.postMaterial(form.value).subscribe((res) => {
        this.resetForm(form);
        //this.refreshEmployeeList();
        alert("Successfully uploaded the data")
        this.router.navigate(['/table']);
      });
    }
    else {
      console.log("there");
  
      this.materialService.putMaterial(form.value).subscribe((res) => {
        this.resetForm(form);
        //this.refreshEmployeeList();
        alert("Successfully updated the data")
        this.router.navigate(['/table']);

      });
    }
  }

  refreshEmployeeList() {
    this.materialService.getMaterialList().subscribe((res) => {
      this.materialService.materials = res as Material[];
    });
  }

  onEdit(id:any) {
    console.log("eddit"+id);
    this.materialService.getMaterialList();
    console.log(this.materialService.getMatId);   
    this.materialService.getThatMat(id).subscribe((res)=>{
      console.log(res); 
      this._id=Object.values(res)[0];
      this.Domain=Object.values(res)[1]; 
      this.course_id=Object.values(res)[2];
      this.link1=Object.values(res)[3];
      this.link2=Object.values(res)[4];
      this.link3=Object.values(res)[5];
      this.video1=Object.values(res)[6];
      this.video2=Object.values(res)[7];
      this.video3=Object.values(res)[8];
      this.cost=Object.values(res)[9];  
     })
    
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.materialService.deleteMaterial(_id).subscribe((res) => {
        this.refreshEmployeeList();
        this.resetForm(form);
      });
    }
  }


}
