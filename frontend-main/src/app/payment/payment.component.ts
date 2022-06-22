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
      this.cost=JSON.stringify(res);
      this.materialService.setCCost=this.cost.slice(8,12);
      console.log(this.materialService.getCCost);
      this.cost=this.materialService.getCCost;
      console.log(this.cost);
      console.log(this.materialService.getCourse);
      this.paidCourse_id=this.materialService.getCourse
    });
    
  }
  onSubmit(){
    console.log(this.userService.getUser);

    this.userService.buyCourse(this.paidCourse_id,this.userService.getUser).subscribe((res)=>{
      console.log(res);
      
    });
  }
}
