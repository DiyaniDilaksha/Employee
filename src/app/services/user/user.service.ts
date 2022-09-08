import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/saveUser';
  }

  saveuser(data:any):Observable<any>{
    console.log("save a item  "+data);
    return this.http.post<any>('http://localhost:8080/saveUser',data);
  }



   
}
