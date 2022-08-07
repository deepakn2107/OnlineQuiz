import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from 'src/app/common/quiz';
import { Scorecard } from 'src/app/common/scorecard';
import { User } from 'src/app/common/user';
import { QuizserviceService } from 'src/app/services/quizservice.service';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {
  user:User 
  scoreCard: Scorecard[]
  quiz:Quiz
  quizes: Quiz[]
  quizId:any
  qId:number=0;

  date =new Date()
  day = this.date.getDate();
  month = this.date.getMonth()+1;
  year = this.date.getFullYear();
  fullDate = `${this.day}.${this.month}.${this.year}`

  constructor(private activateRoute:ActivatedRoute, private route:Router, private service:QuizserviceService) { }

  ngOnInit(): void {
    this.getScorecardById();
    this.getUserById();
    this.getQuizById();
    this.getAllQuizes();
    // this.getScoresById(this.qId);


  }

  gotocategories(){
    const studentId = this.activateRoute.snapshot.paramMap.get("studentId");
    const quizid = this.activateRoute.snapshot.paramMap.get("quizid");
    this.route.navigateByUrl("studenthomepage/"+studentId)

  }

  getScorecardById(){
    const studentId = this.activateRoute.snapshot.paramMap.get("studentId");
    this.service.getScorecard(studentId).subscribe(data=>{
      this.scoreCard=data;
      console.log(this.scoreCard)
    });

  }
  getUserById(){
    const studentId = this.activateRoute.snapshot.paramMap.get("studentId");
    this.service.getUserById(studentId).subscribe(data=>{
      this.user= data;
      console.log(this.user);
    });
  }

  getQuizById(){
    const quizid = this.activateRoute.snapshot.paramMap.get("quizid");
    this.service.getQuizById(quizid).subscribe(data=>{
      this.quiz= data;
      console.log(this.quiz);
    })

  }

  getAllQuizes(){
    this.service.getQuizes().subscribe(data=>{
      this.quizes= data;
      console.log(this.quizes)

    })
  }

  getScoresById(){
    // console.log(this.fullDate);
    if(this.qId==0){
      this.getScorecardById()

    }else{
      const studentId = this.activateRoute.snapshot.paramMap.get("studentId");
    this.service.getScoreByQid(this.qId, studentId).subscribe(data=>{
        this.scoreCard=data;
        
        console.log(this.scoreCard);
    })
    }
    
  }

}
