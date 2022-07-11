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
error:string='';
  constructor(public materialService:MaterialService,private router:Router) { }

  ngOnInit(): void {
    this.materialService.getMaterialList().subscribe((res)=>{
      console.log(res);
      
      this.materialService.materials = Object.values(res)[0] as Material[];

    },(err)=>{
      this.error=err.message;
      console.log(err.error.message);
      alert(err.error.message);
    });
  }
  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.materialService.deleteMaterial(_id).subscribe((res) => {
        this.refreshEmployeeList();
        alert(Object.values(res)[0])
      });
    }
  }
  refreshEmployeeList() {
    this.materialService.getMaterialList().subscribe((res) => {
      this.materialService.materials = Object.values(res)[0] as Material[];
    });
  }
 


}
