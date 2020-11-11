import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
//import { data } from 'jquery';
import {Questions} from '../Questions';
import{QuestionsService} from '../questions.service';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
 //questions:Questions=new Questions();
 questions=new Questions();
  constructor(private qnService:QuestionsService,private router:Router) { }
 
  myform: FormGroup;
  add( ) {

      this.qnService.addQuestion(this.questions).subscribe(data=>{
    //this.questions.addQuestion(this.questions).subscribe(data=>{
      //alert(JSON.stringify(data)); 
      if (data.status == 'SUCCESS') {
        alert("added");
      }
      else {
        //missing code right now 
        alert("not addded");
      }
    })

  }

}
