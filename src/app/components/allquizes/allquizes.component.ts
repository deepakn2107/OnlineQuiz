import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from 'src/app/common/quiz';
import { Scorecard } from 'src/app/common/scorecard';
import { QuizserviceService } from 'src/app/services/quizservice.service';

@Component({
  selector: 'app-allquizes',
  templateUrl: './allquizes.component.html',
  styleUrls: ['./allquizes.component.css']
})
export class AllquizesComponent implements OnInit {
  scorecard:Scorecard[]
  quizes:Quiz[]
  constructor(private service: QuizserviceService, private route:Router) { }

  ngOnInit(): void {
    this.getQuizes();
  }
  getQuizes(){
    this.service.getQuizes().subscribe(data=>{
      this.quizes=data;
      console.log(this.quizes);
    })
  }
  getScoresByQId(qId:any){
    this.service.getScoreByQuizid(qId).subscribe(data=>{
      this.scorecard=data;
      console.log(this.scorecard);
    })
  }

  getUserById(){
    
  }

}
