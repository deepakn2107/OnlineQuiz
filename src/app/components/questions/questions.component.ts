import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Questions } from 'src/app/common/questions';
import { QuizserviceService } from 'src/app/services/quizservice.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions: Questions[]
  constructor(private service:QuizserviceService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllQuestions();
  }

  getAllQuestions(){
    const id = this.activateRoute.snapshot.paramMap.get("quizid");
    this.service.getAllQuestions(id).subscribe(data=>{
      console.log(data);
      this.questions =data;
    })
  }
}
