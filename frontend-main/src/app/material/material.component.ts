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
//   _id:any;
//   course_id :any;
//   Domain : any;
//   link1 : any;
//   link2 : any;
//   link3 : any;
//   video1: any;
//   video2: any;
//   video3: any;
//   cost:any;
//   newData:boolean=false;
//   materials:Material[]=[];
//   constructor(public materialService:MaterialService,public router:Router,private route:ActivatedRoute){}
//   ngOnInit(): void {
//     this.resetForm();
//     this.refreshEmployeeList();
//     this.route.paramMap.subscribe(params => {
//       var id = params.get('id');
//       this.materialService.setMatId=id; 
//       this.onEdit(id);
//     });
// }
    
//   resetForm(form?: NgForm) {
//     if (form)
//       form.reset();
//     this.materialService.selectedMaterial= {
//       _id:"",
//       course_id :"",
//       Domain : "",
//       link1 : "",
//       link2 : "",
//       link3 : "",
//       video1: "",
//       video2: "",
//       video3: "",
//       cost:0
//     }
//   }

//   onSubmit(form: NgForm) {
//     this.materialService.setMat=form;
//     console.log(this.materialService.getMatId);   
//     if (!this.materialService.getMatId) {
//       this.materialService.postMaterial(form.value).subscribe((res) => {
//         this.resetForm(form);
//         alert("Successfully uploaded the data")
//         this.router.navigate(['/table']);
//       });
//     }
//     else {
//       this.materialService.putMaterial(form.value).subscribe((res) => {
//         this.resetForm(form);
//         alert("Successfully updated the data")
//         this.router.navigate(['/table']);

//       });
//     }
//   }

//   refreshEmployeeList() {
//     this.materialService.getMaterialList().subscribe((res) => {
//       this.materials = res as Material[];
//     });
//   }

//   onEdit(id:any) {
//     this.materialService.getMaterialList();
//     console.log(this.materialService.getMatId);   
//     this.materialService.getThatMat(id).subscribe((res)=>{
//       console.log(res); 
//       this._id=Object.values(res)[0];
//       this.Domain=Object.values(res)[1]; 
//       this.course_id=Object.values(res)[2];
//       this.link1=Object.values(res)[3];
//       this.link2=Object.values(res)[4];
//       this.link3=Object.values(res)[5];
//       this.video1=Object.values(res)[6];
//       this.video2=Object.values(res)[7];
//       this.video3=Object.values(res)[8];
//       this.cost=Object.values(res)[9];  
//      })
    
//   }

//   onDelete(_id: string, form: NgForm) {
//     if (confirm('Are you sure to delete this record ?') == true) {
//       this.materialService.deleteMaterial(_id).subscribe((res) => {
//         this.refreshEmployeeList();
//         this.resetForm(form);
//       });
//     }
//   }

materialForm:FormGroup|any;
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
  materials:Material[]=[];
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
    this.resetForm();
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
              this.resetForm(form);
              alert("Successfully uploaded the data")
              this.router.navigate(['/table']);
            });
          }
          else {
            this.materialService.putMaterial(form.value).subscribe((res) => {
              this.resetForm(form);
              alert("Successfully updated the data")
              this.router.navigate(['/table']);
      
            });
          }
        
      

}
// onEdit(id:any) {
//       this.materialService.getMaterialList();
//       console.log(this.materialService.getMatId);   
//       this.materialService.getThatMat(id).subscribe((res)=>{
//         console.log(res); 
//         console.log(Object.values(res)[1]);
        
//         this._id=Object.values(res)[0];
//         this.Domain=Object.values(res)[1]; 
//         this.course_id=Object.values(res)[2];
//         this.link1=Object.values(res)[3];
//         this.link2=Object.values(res)[4];
//         this.link3=Object.values(res)[5];
//         this.video1=Object.values(res)[6];
//         this.video2=Object.values(res)[7];
//         this.video3=Object.values(res)[8];
//         this.cost=Object.values(res)[9];  

//         this.materialForm=this.fb.group({
//           Domain:new FormControl(this.Domain,[Validators.required]),
//           course_id:new FormControl(this.course_id,[Validators.required]),
//           link1:new FormControl(this.link1,[Validators.required]),
//           link2:new FormControl(this.link2,[Validators.required]),
//           link3:new FormControl(this.link3,[Validators.required]),
//           video1:new FormControl( this.video1,[Validators.required]),
//           video2:new FormControl( this.video2,[Validators.required]),
//           video3:new FormControl( this.video3,[Validators.required]),
//           cost:new FormControl( this.cost,[Validators.required])
  
//       })
//        })
      
      
//     }

onEdit(id:any) {
  this.materialService.getMaterialList();
  console.log(this.materialService.getMatId);   
  this.materialService.getThatMat(id).subscribe(
    (res:any)=>this.editMaterial(res),
    (err:any)=>console.log(err)
    );
} 
editMaterial(material:Material){
  this.materialForm.patchValue({
    Domain:material.Domain,
    course_id:material.course_id,
    link1:material.link1,
    link2:material.link2,
    link3:material.link3,
    video1:material.video1,
    video2:material.video2,
    video3:material.video3,
    cost:material.cost,
  })
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

        refreshEmployeeList() {
              this.materialService.getMaterialList().subscribe((res) => {
                this.materials = res as Material[];
              });
            }

}
