import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MaterialService } from '../shared/material.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-your-courses',
  templateUrl: './your-courses.component.html',
  styleUrls: ['./your-courses.component.scss']
})
export class YourCoursesComponent implements OnInit {
  id: string | null = '';
  paidCourses: any = [];
  domainName: any = [];
  constructor(public userService: UserService, public route: ActivatedRoute, public materialService: MaterialService) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      var id = params.get('id');
      this.id = id;
      this.userService.setEditId = id;
    });
    this.userService.getThatUser(this.id).subscribe((res) => {
      this.paidCourses = Object.values(res)[0][0].paidCourseId;
      for (let element in this.paidCourses) {
        this.materialService.getDomain(this.paidCourses[element]).subscribe((res) => {
          this.domainName.push(res);
        });
      }
    })

  }

}
