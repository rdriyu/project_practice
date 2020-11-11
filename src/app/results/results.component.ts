import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  num1 :number;
  num2 :number;
  num3 :number;
  num4 :number;

  constructor(private router : Router) {
    this.num1 = Number(sessionStorage.getItem("test1"));
    this.num2 = Number(sessionStorage.getItem("test2"));
    this.num3 = Number(sessionStorage.getItem("test3"));   
    this.num4 = Number(sessionStorage.getItem("total")); 
  }
  
  ngOnInit(): void {

  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['/homeLink']);
  }

}
