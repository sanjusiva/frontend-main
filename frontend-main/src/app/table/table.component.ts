import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Material } from '../shared/material.model';
import { MaterialService } from '../shared/material.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
error:string='';
  constructor(public materialService:MaterialService) { }

  ngOnInit(): void {
    this.materialService.getMaterialList().subscribe((res:any)=>{
      this.materialService.materials = res['docs'] as Material[];
    },(err)=>{
      this.error=err.message;
      alert(err.error.message);
    });
  }
  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.materialService.deleteMaterial(_id).subscribe((res:any) => {
        this.refreshEmployeeList();
        alert(res['message'])
      });
    }
  }
  refreshEmployeeList() {
    this.materialService.getMaterialList().subscribe((res:any) => {
      this.materialService.materials = res['docs'] as Material[];
    });
  }
}
