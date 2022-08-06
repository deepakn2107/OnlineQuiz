import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizCategory } from 'src/app/common/quiz-category';
import { QuizserviceService } from 'src/app/services/quizservice.service';

@Component({
  selector: 'app-studenthomepage',
  templateUrl: './studenthomepage.component.html',
  styleUrls: ['./studenthomepage.component.css']
})
export class StudenthomepageComponent implements OnInit {
  category : QuizCategory[]
  constructor( private route: Router, private service:QuizserviceService) { }

  ngOnInit(): void {
    this.getAllCategories()
  }
  getAllCategories(){
    this.service.getAllCategories().subscribe(data=>{
      console.log(data);
      this.category =data;
    })
  }

}
