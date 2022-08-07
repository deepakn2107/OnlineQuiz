import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Questions } from '../common/questions';
import { Quiz } from '../common/quiz';
import { QuizCategory } from '../common/quiz-category';
import { Scorecard } from '../common/scorecard';
import { User } from '../common/user';

@Injectable({
  providedIn: 'root'
})
export class QuizserviceService {

  private quizcaturl="http://localhost:8080/api/quizcategory"
  private userUrl = "http://localhost:8080/api/user"

  private quizurl ="http://localhost:8080/api/quiz/search/findByquizcatId?id="

  private questurl ="http://localhost:8080/api/question/search/findByqId?id="
  private scorecardurl ="http://localhost:8080/api/scorecard"
  
  
  


  constructor(private httpClient: HttpClient ) { }
  scorecard:Scorecard[]
saveUser(user:User):Observable<User>{
  console.log(user);
  const httpOptions = {
    headers : new HttpHeaders({
      'Content_type' : 'application/json',
      'Authorization' : 'auth-token',
      'Access-Control-Allow-Origin' : '*'
    })
  };
  return this.httpClient.post<User>(this.userUrl, user,httpOptions);
}

getAllUsers():Observable<User[]>{
  return this.httpClient.get<getUserResponse>(this.userUrl).pipe(map(data=>data._embedded.users));

}
getAllCategories():Observable<QuizCategory[]>{
  return this.httpClient.get<getAllCategories>(this.quizcaturl).pipe(map(data=>data._embedded.quizCategories));

}
getAllQuizes(id:string):Observable<Quiz[]>{
  const url = this.quizurl+id
  return this.httpClient.get<getAllQuizes>(url).pipe(map(data=>data._embedded.quizzes));


}
getAllQuestions(id:string):Observable<Questions[]>{
  const url = this.questurl+id
  return this.httpClient.get<getAllQuestions>(url).pipe(map(data=>data._embedded.questions));

}
getUserByEmail(email:string):Observable<User>{
  const url = "http://localhost:8080/api/user/search/findByEmailContainsIgnoreCase?email="+email;

  return this.httpClient.get<User>(url);

}

saveScore(scorecard:Scorecard):Observable<Scorecard>{
  console.log(scorecard);
  const httpOptions = {
    headers : new HttpHeaders({
      'Content_type' : 'application/json',
      'Authorization' : 'auth-token',
      'Access-Control-Allow-Origin' : '*'
    })
    
  };
  return this.httpClient.post<Scorecard>(this.scorecardurl, scorecard, httpOptions);
}

getScorecard(studentId:string){
  
  const url = "http://localhost:8080/api/scorecard/search/findByUserId?id="+studentId;
  return this.httpClient.get<getScorecard>(url).pipe(map(data=>data._embedded.scoreCards));

}
getUserById(studentId:string){
  const url =this.userUrl+"/"+studentId;
  return this.httpClient.get<User>(url);
}
getQuizById(id:string){
  const url = "http://localhost:8080/api/quiz/"+id;
  return this.httpClient.get<Quiz>(url);
}
getQuizes(){
  const url="http://localhost:8080/api/quiz"
  return this.httpClient.get<getAllQuizes>(url).pipe(map(data=>data._embedded.quizzes));
}
getScoreByQid(qId:number){
  const url ="http://localhost:8080/api/scorecard/search/findByquizId?id="+qId;
   return this.httpClient.get<getScorecard>(url).pipe(map(data=>data._embedded.scoreCards));
}
}



interface getUserResponse{
  _embedded:{
    users: User[]
  }
}

// "_embedded" : {
//   "quizCategories" : [ {
//     "quizId" : 1,
//     "quizCategory" : "technical",

interface getAllCategories{
  _embedded:{
    quizCategories:QuizCategory[]

  }
}

// "_embedded" : {
//   "quizzes" : [ {
interface getAllQuizes{
  _embedded:{
    quizzes:Quiz[]
  }
 
}

interface getAllQuestions{
  _embedded:{
    questions:Questions[]
  }
}


interface getScorecard{
  _embedded:{
    scoreCards: Scorecard[]
  }
}
// interface getQuiznameById{
//   _embedded:{
//     quizName:
//   }
// }



