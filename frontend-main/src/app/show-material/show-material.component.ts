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

  thisId = "";
  thisDomain: string | null = "";
  course_id: any;
  showMaterial:Material[]=[]

  constructor(
    public materialService: MaterialService,
    public router: Router,
    public route: ActivatedRoute,
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.refreshEmployeeList();
    this.route.paramMap.subscribe(params => {
      var Domain = params.get('Domain');
      this.thisDomain = Domain;
    });
    this.route.paramMap.subscribe(params => {
      var course = params.get('course');
      this.course_id = course;
      this.materialService.setCourse = this.course_id;

    });
    this.onDomain();
  }
  
  refreshEmployeeList() {
    this.userService.getUserList().subscribe((res) => {
      console.log(res);
    })
    this.materialService.getMaterialList().subscribe((res) => {
      this.showMaterial = res as Material[];
      console.log(res);

    });
  }

  onEdit(mat: Material) {
    this.materialService.selectedMaterial = mat;
    this.thisId = this.materialService.getId(mat)
    this.materialService.putMaterial(mat).subscribe((res) => {
      this.router.navigate(['/material/', this.thisId]);
    })


  }

  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.materialService.deleteMaterial(_id).subscribe((res) => {
        this.refreshEmployeeList();
      });
    }
  }

  onDomain() {
    console.log("onDomain domain" + this.thisDomain)
    this.userService.getPaidCourse(this.course_id).subscribe((res) => {
      console.log(res);
      if (res == true) {
        console.log(this.thisDomain);

        this.materialService.getMaterial(this.thisDomain, this.course_id).subscribe((res) => {
          console.log(res);
          this.showMaterial = res as Material[];
        })

      }
      else {
        this.router.navigate(['/pay/this.course_id']);
      }
    });
    
  }

}
