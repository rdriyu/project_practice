import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent {
  
  public i : number;
  constructor(  public router : Router){}

  go(k: number){
    if (k == 1) {
      this.i =1;
      console.log(this.i);
      sessionStorage.setItem("key",this.i.toString());
      this.router.navigate(['instructionLink']);
    } else {
      this.i =2;
      console.log(this.i);
      sessionStorage.setItem("key",this.i.toString());
      this.router.navigate(['instructionLink']);
    }
  }
}
