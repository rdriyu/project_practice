import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Delete } from '../Delete';

import {Questions} from '../Questions';
import{QuestionsService} from '../questions.service';

@Component({
  selector: 'app-removequestion',
  templateUrl: './removequestion.component.html',
  styleUrls: ['./removequestion.component.css']
})
export class RemovequestionComponent {

  //constructor() { }
// ngOnInit(): void {}
 delete1:Delete=new Delete();
 questions:Questions=new Questions();
 //questionlist:Questions=Questions[10];
 ql:Questions[]=[];
  constructor(private qnService:QuestionsService,private router:Router) { }

  deleteTutorial() {
    this.qnService.delQ(this.delete1)
      .subscribe(
        response => {
         // console.log(response);
          if (response.status == 'SUCCESS') {
            alert("deleted");
          //this.router.navigate(['/tutorials']);
          
        }
        else
        alert("not deleted");
      });
  }


  searchquest(){
    //this.qnService.searchquestion(this.questions.subId,this.questions.levelId).subscribe(data=>{
      this.qnService.searchquestion(this.questions.subId,this.questions.levelId).subscribe(data=>{
        this.ql=data;
        console.log(this.questions.subId);
        console.log(this.questions.levelId);
      console.log(data);
      //console.log(this.questions.questionStatement,this.questions.id);
    })
  }
}
