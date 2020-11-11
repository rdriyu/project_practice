/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() { }
}*/
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Questions} from './Questions';
import{Delete} from './Delete';
import { Observable } from 'rxjs';
import { Status } from "./status";
@Injectable({ providedIn: 'root' })
export class QuestionsService {
  constructor(private http: HttpClient) { }
  addQuestion(questions:Questions): Observable<Status> {
    let url = 'http://localhost:8080/addQuestion';
    return this.http.post<Status>(url, questions);
  }
  
  delQ(delete1:Delete):Observable<Status>{
    let url='http://localhost:8080/deleteQuestion';
    return this.http.post<Status>(url, delete1);
  }
 /* baseUrl = 'http://localhost:8585';
 
  searchquestion(subId:number,levelId:number):Observable<Questions[]>{
  return this.http.get<Questions[]>(`${this.baseUrl}/${subId}/${levelId}`);
}*/
baseUrl = 'http://localhost:8080';
searchquestion(subId:number,levelId:number):Observable<Questions[]>{
return this.http.get<Questions[]>(`${this.baseUrl}/${subId}/${levelId}`)
}
 

}
 
  
  

