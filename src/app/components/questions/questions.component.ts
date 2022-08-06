import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Questions } from 'src/app/common/questions';
import { Scorecard } from 'src/app/common/scorecard';
import { QuizserviceService } from 'src/app/services/quizservice.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions: Questions[]
  submitted: boolean = false;
  marksObtained: number = 0;
  correctAnswers: number = 0;
  questionsAttempted: number = 0;
  totalQuestions: number = 0;
  scorecard: Scorecard

  constructor(private service: QuizserviceService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllQuestions();
  }

  getAllQuestions() {

    const id = this.activateRoute.snapshot.paramMap.get("quizid");
    this.service.getAllQuestions(id).subscribe(data => {
      console.log(data);
      this.questions = data;
      this.questions.forEach((question) => {
        question['givenAnswer'] = ''
      })
    })
  }
  submit() {
    // const id = this.activateRoute.snapshot.paramMap.get("quizid");
    this.submitted = true
    const studentId = this.activateRoute.snapshot.paramMap.get("studentId");
    const quizid = this.activateRoute.snapshot.paramMap.get("quizid");
    this.totalQuestions = this.questions.length;
    this.questions.forEach((q) => {
      if (q.givenAnswer == q.answer) {
        this.correctAnswers++;
        let marks = 100 / this.questions.length;
        this.marksObtained += marks;
      }
      if (q.givenAnswer != '') {
        this.questionsAttempted++;
      }
    });
    this.scorecard = new Scorecard(0, studentId, this.marksObtained, quizid);
    console.log(this.scorecard)
    this.service.saveScore(this.scorecard).subscribe((data) => {
      alert("Scores got saved in database")
    })

  }


}
