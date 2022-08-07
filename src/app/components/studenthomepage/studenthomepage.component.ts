import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizCategory } from 'src/app/common/quiz-category';
import { User } from 'src/app/common/user';
import { QuizserviceService } from 'src/app/services/quizservice.service';

@Component({
  selector: 'app-studenthomepage',
  templateUrl: './studenthomepage.component.html',
  styleUrls: ['./studenthomepage.component.css']
})
export class StudenthomepageComponent implements OnInit {
  category : QuizCategory[]
  
 
  constructor( private route: Router, private service:QuizserviceService, private activateRouter:ActivatedRoute) { }
  
 
  ngOnInit(): void {
    this.getAllCategories()
  }
  getAllCategories(){
    this.service.getAllCategories().subscribe(data=>{
      console.log(data);
      this.category =data;
    })
  }

  gotoQuiz(quizcatid:number){
    const studentId = this.activateRouter.snapshot.paramMap.get("studentId");
    this.route.navigateByUrl("/subcategory/"+quizcatid+"/"+studentId)
  }

  gotocategories(){
    const studentId = this.activateRouter.snapshot.paramMap.get("studentId");
    const quizid = this.activateRouter.snapshot.paramMap.get("quizid");
    this.route.navigateByUrl("studenthomepage/"+studentId)

  }
  gotoscorecard(){
    const studentId = this.activateRouter.snapshot.paramMap.get("studentId");
    const quizid = this.activateRouter.snapshot.paramMap.get("quizid");
    this.route.navigateByUrl("scorecard/"+studentId)

  }


}
