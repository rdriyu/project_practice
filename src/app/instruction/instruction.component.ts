import { Component, OnInit } from '@angular/core';
import { SubjectsComponent } from '../subjects/subjects.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent {
  constructor(private router : Router){}
  i : number;
  nav() {
    this.i = Number(sessionStorage.getItem("key")); 
    if (this.i == 1) {
      console.log(this.i);
      this.router.navigate(['/javaQLink']);
    }
    else {
      console.log(this.i);
      this.router.navigate(['/cCppLink']);
    }
  }
}
