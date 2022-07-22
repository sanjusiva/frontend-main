import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Material } from '../shared/material.model';
import { MaterialService } from '../shared/material.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-show-material',
  templateUrl: './show-material.component.html',
  styleUrls: ['./show-material.component.scss']
})
export class ShowMaterialComponent implements OnInit {

  thisId: string | null = "";
  thisDomain: string | null = "";
  courseId: number=0;
  showMaterial:any=[];

  constructor(
    public materialService: MaterialService,
    public router: Router,
    public route: ActivatedRoute,
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      var id = params.get('id');
      this.thisId = id;
    });
    this.onDomain();
  }
  

  onDomain() {
    this.materialService.getCourseId(this.thisId).subscribe((res:any)=>{
      this.courseId= res['courseId'];
      this.materialService.setCourseId=this.courseId ;
      this.userService.getPaidCourse(this.courseId).subscribe((res:any) => {
        if (res['message'] == "Success") {
          this.materialService.getThatMat(this.thisId).subscribe((res)=>{
            this.showMaterial =Object.values(res)[0][0];
          })
        }
      },(err)=>{
        this.router.navigate(['/pay/this.courseId']);
      });
     
    })  
  }
 
}
