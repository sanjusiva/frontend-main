import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Material } from '../shared/material.model';
import { MaterialService } from '../shared/material.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
thisId="";
thisDomain:string|null="";
course_id:any;
// thisCurrentUser:string='';

  constructor(
    public materialService:MaterialService,
    public router:Router,
    public route:ActivatedRoute,
    public userService:UserService
    ) { }

  ngOnInit(): void {
    // this.resetForm();
    this.refreshEmployeeList();
    this.route.paramMap.subscribe(params => {
      var Domain = params.get('Domain');
      console.log("ulla"+Domain);   
      this.thisDomain=Domain;
    });
    this.route.paramMap.subscribe(params => {
      var course = params.get('course');
      console.log("ulla"+course);   
      this.course_id=course;
      this.materialService.setCourse=this.course_id;

    });
    this.onDomain();
  }
  // resetForm(form?: NgForm) {
  //   if (form)
  //     form.reset();
  //   this.materialService.selectedMaterial= {
  //     _id: "",
  //     course_id :"",
  //     Domain : "",
  //     link1 : "",
  //     link2 : "",
  //     link3 : "",
  //     video1: "",
  //     video2: "",
  //     video3: "",
  //     cost:0
  //   }
  // }

  refreshEmployeeList() {
    console.log("edit");
    console.log(this.userService.getUser);
  
    this.userService.getUserList().subscribe((res)=>{
      console.log(res);  
    })
    this.materialService.getMaterialList().subscribe((res) => {
      this.materialService.materials = res as Material[];
      console.log(res);
      
    });
  }

  onEdit(mat: Material) {
    this.materialService.selectedMaterial = mat;
    this.thisId = this.materialService.getId(mat)
      console.log(this.thisId);
      this.materialService.putMaterial(mat).subscribe((res)=>{
      this.router.navigate(['/material/',this.thisId]);
        console.log(res)
      })
      
      
  }

  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.materialService.deleteMaterial(_id).subscribe((res) => {
        this.refreshEmployeeList();
      });
    }
  }

  onDomain(){
    console.log("onDomain domain"+this.thisDomain)
   this.userService.getPaidCourse(this.course_id).subscribe((res)=>{
      console.log(res); 
      if(res==true){
        console.log(this.thisDomain);
        
        this.materialService.getMaterial(this.thisDomain,this.course_id).subscribe((res)=>{
            console.log(res);
            this.materialService.materials = res as Material[];
          })
        //this.router.navigate(['/edit/this.thisDomain/this.course_id']);

      }  
      else{
        console.log(this.course_id);
        this.router.navigate(['/pay/this.course_id']);
      }
    });
 //---------**********------------   
    // this.materialService.getMaterial(this.thisDomain,this.course_id).subscribe((res)=>{
    //   console.log(res);
    //   console.log("inga"+this.course_id);
      
    //   this.materialService.materials = res as Material[];
    // })

   // ---------**********------------  
    // this.materialService.getWithout(this.thisDomain).subscribe((res)=>{
    //   console.log(res);
    // this.materialService.materials = res as Material[];

      
    // })
  }

}
