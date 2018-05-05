import { RollCallService } from './../services/roll-call.service';
import { RegisterService } from './../services/register.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../services/index';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  model: any = {};
  loading = false;
  added = false;
  userPresence: number;
  totalPresence: number;
  presencePercent: any;

  constructor(
    private router: Router,
        private alertService: AlertService,
        private rollCallService: RollCallService,
        private registerService: RegisterService) { }

  ngOnInit() {
    this.getOverview();
  }
  getOverview() {
    this.registerService.getPresence()
      .subscribe(
        (res:any)=> {
          this.userPresence = res.result.length;
          this.rollCallService.getTotalAttendance()
          .subscribe(
            (res:any)=> {
              this.totalPresence = res.result.length;
              this.presencePercent = ((this.userPresence/this.totalPresence)*100).toFixed(2);
            }, (error)=> {
              error
            } 
          );
        }, (error)=> {
          error
        } 
      );

 }


}
