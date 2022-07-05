import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Material } from '../shared/material.model';
import { MaterialService } from '../shared/material.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
//userList:Material[]=[];
  constructor(public materialService:MaterialService,private router:Router) { }

  ngOnInit(): void {
    this.materialService.getMaterialList().subscribe((res)=>{
      this.materialService.materials = res as Material[];

    })
  }
  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.materialService.deleteMaterial(_id).subscribe((res) => {
        this.refreshEmployeeList();
      });
    }
  }
  refreshEmployeeList() {
    this.materialService.getMaterialList().subscribe((res) => {
      this.materialService.materials = res as Material[];
    });
  }
 


}
