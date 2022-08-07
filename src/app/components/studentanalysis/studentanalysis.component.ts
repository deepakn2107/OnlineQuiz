import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Scorecard } from 'src/app/common/scorecard';
import { User } from 'src/app/common/user';
import { QuizserviceService } from 'src/app/services/quizservice.service';

@Component({
  selector: 'app-studentanalysis',
  templateUrl: './studentanalysis.component.html',
  styleUrls: ['./studentanalysis.component.css']
})
export class StudentanalysisComponent implements OnInit {
  user:User[]
  scoreById:Scorecard[]
  constructor(private service:QuizserviceService, private route:Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents(){
    this.service.getAllStudents().subscribe(data=>{
      this.user=data;
      console.log(this.user)
    })
  }
  getScorecard(studentId:any){
    this.service.getScorecard(studentId).subscribe(data=>{
      this.scoreById= data;
      console.log(this.scoreById);
    })

  }

}
