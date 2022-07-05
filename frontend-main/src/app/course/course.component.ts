import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../shared/material.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  constructor(private userService: UserService, private materialService: MaterialService) { }
  ngOnInit(): void {
    console.log("In service" + this.userService.getUser);
    this.userPaidCourse();
  }
  userPaidCourse() {
    console.log("course ts" + this.materialService.getCourse);

  }
}

