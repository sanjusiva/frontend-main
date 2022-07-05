import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../shared/material.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  cost:any;
  paidCourse_id:any;
  constructor(
    private materialService:MaterialService,
    private userService:UserService) { }

  ngOnInit(): void {
    console.log(this.materialService.getCourse);
    this.materialService.getCost(this.materialService.getCourse).subscribe((res)=>{
      console.log(res);
      // this.cost=res
      this.cost=JSON.stringify(res);
      this.materialService.setCCost=this.cost.slice(8,12);
      this.cost=this.materialService.getCCost;
      this.paidCourse_id=this.materialService.getCourse
    });
    
  }
  onSubmit(){
    this.userService.buyCourse(this.paidCourse_id,this.userService.getUser).subscribe((res)=>{
      console.log(res);
      
    });
  }
}
