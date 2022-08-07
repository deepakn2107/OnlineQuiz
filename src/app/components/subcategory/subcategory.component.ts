import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from 'src/app/common/quiz';
import { QuizserviceService } from 'src/app/services/quizservice.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {
  quizes: Quiz[]
  constructor(private service:QuizserviceService, private activateRoute:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.getAllQuizes()
  }
  getAllQuizes(){
    const id = this.activateRoute.snapshot.paramMap.get("quizcatid")
    this.service.getAllQuizes(id).subscribe(data=>{
      console.log(data);
      this.quizes =data;
    })
  }

gotoQuiz(qId:number){
  const studentId= this.activateRoute.snapshot.paramMap.get("studentId")
  this.route.navigateByUrl("questions/"+qId+"/"+studentId)

}
gotocategories(){
  const studentId = this.activateRoute.snapshot.paramMap.get("studentId");
  const quizid = this.activateRoute.snapshot.paramMap.get("quizid");
  this.route.navigateByUrl("studenthomepage/"+studentId)

}
gotoscorecard(){
  const studentId = this.activateRoute.snapshot.paramMap.get("studentId");
  const quizid = this.activateRoute.snapshot.paramMap.get("quizid");
  this.route.navigateByUrl("scorecard/"+studentId)

}
}
