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
  users: User[]
  Password:string
  mailId:string

  id:number
  user :User = new User(0,"","","","","","",0)

  constructor(private service:QuizserviceService, private route :Router, private activaterRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activaterRoute.paramMap.subscribe(()=>{
      this.listUsers()
    })
  }
  listUsers(){
    this.service.getAllUsers().subscribe(data=>{
      console.log(data);
      this.users =data;
    })

  }

  validate(){
    const users=this.users.find((a:any)=>{
      this.id = a.roleId
      return a.email==this.mailId && a.password==this.Password
    });

      if(users && this.id==1){
        this.route.navigateByUrl("/adminhomepage")
      }
      else if(users && this.id==2){
        this.service.getUserByEmail(this.mailId).subscribe(data=>{
          
          this.user=data;
          console.log(this.user.userId);
          this.route.navigateByUrl("/studenthomepage/"+this.user.userId)
        })
        
      }
      else{
        alert("User not Found. Create account to access this page.")
      }



  }

}
