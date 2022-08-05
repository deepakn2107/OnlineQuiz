import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/common/user';
import { QuizserviceService } from 'src/app/services/quizservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User= new User(0,"","","","","","",2);
  constructor(private service:QuizserviceService, private route:Router) { }

  ngOnInit(): void {
    this.onSubmit()
  }

  onSubmit(){
    console.log(this.user);
    this.service.saveUser(this.user).subscribe((data)=>{
      
      alert("Registration Sucessfull");
      this.route.navigateByUrl("/login");
    });

    
  }

}
