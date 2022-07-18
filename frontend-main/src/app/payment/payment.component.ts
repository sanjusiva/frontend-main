import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialService } from '../shared/material.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  cost: number=0;
  paidCourseId: number=0;
  courseId: number=0;
  constructor(
    private materialService: MaterialService,
    private userService: UserService,
    private router: Router,
    public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.materialService.getCost(this.materialService.getCourseID).subscribe((res) => {
      this.materialService.setCCost = Object.values(res)[0];
      this.cost = this.materialService.getCCost;
      this.paidCourseId = this.materialService.getCourseID

    });

  }
  onSubmit() {
    this.userService.buyCourse(this.paidCourseId, this.userService.getUser).subscribe((res) => {
      alert(Object.values(res)[0]);
      this.router.navigate(['/course']);
    });
  }
}
