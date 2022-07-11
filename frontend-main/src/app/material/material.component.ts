import { Component, OnInit, TestabilityRegistry } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
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

  materialForm:FormGroup|any;
  materials:Material[]=[];
  material:string='';
constructor(public materialService:MaterialService,
  public router:Router,
  private route:ActivatedRoute,
  private fb:FormBuilder
  ){
    this.materialForm=this.fb.group({
        Domain:new FormControl('',[Validators.required]),
        course_id:new FormControl('',[Validators.required]),
        link1:new FormControl('',[Validators.required]),
        link2:new FormControl('',[Validators.required]),
        link3:new FormControl('',[Validators.required]),
        video1:new FormControl('',[Validators.required]),
        video2:new FormControl('',[Validators.required]),
        video3:new FormControl('',[Validators.required]),
        cost:new FormControl('',[Validators.required])

    })
  }
  ngOnInit(): void {
    // this.resetForm();
    this.refreshEmployeeList();
    this.route.paramMap.subscribe(params => {
      var id = params.get('id');
      this.materialService.setMatId=id; 
      this.onEdit(id);
    });
  }
  
    onSubmit(form: NgForm) {
          this.materialService.setMat=form;
          console.log(this.materialService.getMatId);   
          if (!this.materialService.getMatId) {
            this.materialService.postMaterial(form.value).subscribe((res) => {
              // this.resetForm(form);
              alert(Object.values(res)[0]);
              this.router.navigate(['/table']);
            });
          }
          else {
            this.materialService.putMaterial(form.value).subscribe((res) => {
              // this.resetForm(form);
              alert(Object.values(res)[0])
              this.router.navigate(['/table']);
      
            });
          }
        
      

}

onEdit(id:any) {
  this.materialService.getMaterialList();
  console.log(this.materialService.getMatId);   
  if(this.materialService.getMatId!=null){
  this.materialService.getThatMat(id).subscribe(
    (res:any)=>this.editMaterial(res),
    (err:any)=>console.log(err)
    );
  }
} 
editMaterial(material:Material){
  console.log(Object.values(material)[0]);
  
  this.materialForm.patchValue({
    Domain:Object.values(material)[0].Domain,
    course_id:Object.values(material)[0].course_id,
    link1:Object.values(material)[0].link1,
    link2:Object.values(material)[0].link2,
    link3:Object.values(material)[0].link3,
    video1:Object.values(material)[0].video1,
    video2:Object.values(material)[0].video2,
    video3:Object.values(material)[0].video3,
    cost:Object.values(material)[0].cost,
  })
}

    // resetForm(form?: NgForm) {
    //       if (form)
    //         form.reset();
    //       this.materialService.selectedMaterial= {
    //         _id:"",
    //         course_id :"",
    //         Domain : "",
    //         link1 : "",
    //         link2 : "",
    //         link3 : "",
    //         video1: "",
    //         video2: "",
    //         video3: "",
    //         cost:0
    //       }
    //     }

        refreshEmployeeList() {
              this.materialService.getMaterialList().subscribe((res) => {
                this.materials = res as Material[];
              });
            }

}
