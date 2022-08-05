import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/common/user';
import { QuizserviceService } from 'src/app/services/quizservice.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  user: User[]
  Password:string
  mailId:string

  id:number


  constructor(private service:QuizserviceService, private route :Router, private activaterRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activaterRoute.paramMap.subscribe(()=>{
      this.listUsers()
    })
  }
  listUsers(){
    this.service.getAllUsers().subscribe(data=>{
      console.log(data);
      this.user =data;
    })

  }

  validate(){
    const users=this.user.find((a:any)=>{
      this.id = a.roleId
      return a.email==this.mailId && a.password==this.Password
    });

      if(users && this.id==1){
        this.route.navigateByUrl("")
      }
      else if(users && this.id==2){
        this.route.navigateByUrl("/register")
      }
      else{
        alert("User not Found")
      }



  }
}
