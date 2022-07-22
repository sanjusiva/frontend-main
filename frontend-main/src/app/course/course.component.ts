import { Component, OnInit } from '@angular/core';
import { Material } from '../shared/material.model';
import { MaterialService } from '../shared/material.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  showImage: Material[] = [];
  constructor(private userService: UserService, private materialService: MaterialService) { }
  ngOnInit(): void {
    this.materialService.getMaterialList().subscribe((res:any) => {
      this.showImage = res['docs'] as Material[];
    })
  }
}

