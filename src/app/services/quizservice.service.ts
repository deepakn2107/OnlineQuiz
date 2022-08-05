import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../common/user';

@Injectable({
  providedIn: 'root'
})
export class QuizserviceService {

  private userUrl = "http://localhost:8080/api/user" //http://localhost:8080/api/user
  constructor(private httpClient: HttpClient) { }

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

}


interface getUserResponse{
  _embedded:{
    users: User[]
  }
}
