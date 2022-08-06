import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from 'src/app/common/quiz';
import { QuizserviceService } from 'src/app/services/quizservice.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {
  quizes: Quiz[]
  constructor(private service:QuizserviceService, private activateRoute:ActivatedRoute) { }

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

}
