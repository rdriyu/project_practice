import { Component, OnInit } from '@angular/core';
import { Questions } from '../Questions';
import { QuestionsService } from '../questions.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-java-quiz',
  templateUrl: './java-quiz.component.html',
  styleUrls: ['./java-quiz.component.css']
})
export class JavaQuizComponent implements OnInit {

  radiostatus : boolean;

  constructor(private qnService: QuestionsService, private router: Router) {
    this.radiostatus = false;
   }

  ngOnInit(): void {
    this.questions.levelId = 0;
    window.scrollTo(0, 0);
    this.timer = 0;
    this.seconds = 0;
    //radiostatus: boolean = false;
  }


  timer: any;
  seconds: number;
  questions: Questions = new Questions();
  ql: Questions[] = [];
  ans: string[] = ['---', '---', '---', '---', '---', '---', '---', '---', '---', '---'];
  //radiostatus: boolean = false;

  var: number = 0;
  score: number = 0;
  level1score: number = 0;
  level2score: number = 0;
  level3score: number = 0;
  bool: boolean = false;

  run() {
    this.calculate();
    document.getElementById("quesdiv").style.visibility = "hidden";
    document.getElementById("btnextques").style.visibility = "hidden";
    document.getElementById("tblres").style.visibility = "hidden";
    document.getElementById("but").style.visibility = 'hidden';
    document.getElementById('btsubmit').style.visibility = 'hidden';
    document.getElementById("but").style.visibility = 'hidden';
    document.getElementById('btnext').style.visibility = 'hidden';
    if (this.score >= 6) {
      document.getElementById('pass').style.visibility = 'visible';
      this.var++;
      if (this.var == 1 || this.var == 2) {
        document.getElementById('btnext').style.visibility = 'visible';
        if (this.var == 1)
          this.level1score = this.score;
        else
          this.level2score = this.score;
      }
      else {
        document.getElementById('btresult').style.visibility = 'visible';      
        this.level3score = this.score;
      }
    }
    else {
      this.var++;
      document.getElementById('fail').style.visibility = 'visible';
      document.getElementById('btsubmit').style.visibility = 'hidden';
      document.getElementById('btresult').style.visibility = 'visible';
      document.getElementById('btnext').style.visibility = 'hidden';
      document.getElementById("but").style.visibility = 'hidden';
      if (this.var == 1)
        this.level1score = this.score;
      else if (this.var == 2)
        this.level2score = this.score;
      else
        this.level3score = this.score;
    }
  }

  level() {
    document.getElementById('pass').style.visibility = 'hidden';
    document.getElementById('btsubmit').style.visibility = 'hidden';
    document.getElementById('btnext').style.visibility = 'hidden';
    document.getElementById('btresult').style.visibility = 'hidden';
    document.getElementById('btstart').style.visibility = 'visible';
    document.getElementById('quesdiv').style.visibility = 'hidden';
    document.getElementById("span1").style.visibility = 'visible';
    document.getElementById("span2").style.visibility = 'hidden';
    document.getElementById("btnextques").style.visibility = "hidden";
    this.ql = [];
    //document.body.scrollTop = document.body.scrollTop = 0;
    window.scrollTo(0, 0);
    this.questions.levelId++;
  }

  start() {
    this.reset();
    if (this.bool == false) {
      this.startTimer();
      this.bool = true;
    }
    //this.questions.subId=JSON.stringify(0);
    document.getElementById("motivation").style.visibility = 'hidden';
    document.getElementById("btsubmit").style.visibility = 'visible';
    document.getElementById("btnextques").style.visibility = 'visible'
    document.getElementById("quesdiv").style.visibility = 'visible';
    document.getElementById("btstart").style.visibility = 'hidden';
    document.getElementById("span1").style.visibility = 'hidden';
    document.getElementById("span2").style.visibility = 'visible';
    document.getElementById("but").style.visibility = 'visible';
    document.getElementById("tblres").style.visibility = 'visible';
    if (this.questions.levelId == 0) { this.questions.levelId++; }
    this.qnService.searchquestion(this.questions.subId, this.questions.levelId).subscribe(data => {
      this.ql = data;
      this.q = this.ql[0];
      console.log(this.questions.levelId);
      console.log(this.ql[0].questionStatement);
      console.log(data);
      this.i = 0;
      //console.log(this.questions.questionStatement,this.questions.id);
    })
    this.reset();
  }

  i: any = 1;
  q: Questions = new Questions();


  run1() {
    this.i++;
    this.q = this.ql[this.i];
    if (this.i == 9)
      document.getElementById("btnextques").style.visibility = "hidden";
    //reset();
  }

  go(k: number) {
    this.radiostatus = false;
    this.q = this.ql[k];
    this.i = k;
    if (this.i < 9) {
      document.getElementById("btnextques").style.visibility = "visible";
    }
  }

  confirm() {
    this.radiostatus = false;
    if (this.i == 0) {
      this.ans[this.i] = (<HTMLFormElement>document.getElementById("quiz")).q0.value;
      document.getElementById("btn1").style.backgroundColor = "greenyellow";
      console.log(this.ans);
    } else if (this.i == 1) {
      this.ans[this.i] = (<HTMLFormElement>document.getElementById("quiz")).q1.value;
      document.getElementById("btn2").style.backgroundColor = "greenyellow";
      console.log(this.ans);
    } else if (this.i == 2) {
      this.ans[this.i] = (<HTMLFormElement>document.getElementById("quiz")).q2.value;
      document.getElementById("btn3").style.backgroundColor = "greenyellow";
      console.log(this.ans);
    } else if (this.i == 3) {
      this.ans[this.i] = (<HTMLFormElement>document.getElementById("quiz")).q3.value;
      document.getElementById("btn4").style.backgroundColor = "greenyellow";
      console.log(this.ans);
    } else if (this.i == 4) {
      this.ans[this.i] = (<HTMLFormElement>document.getElementById("quiz")).q4.value;
      document.getElementById("btn5").style.backgroundColor = "greenyellow";
      console.log(this.ans);
    } else if (this.i == 5) {
      this.ans[this.i] = (<HTMLFormElement>document.getElementById("quiz")).q5.value;
      document.getElementById("btn6").style.backgroundColor = "greenyellow";
      console.log(this.ans);
    } else if (this.i == 6) {
      this.ans[this.i] = (<HTMLFormElement>document.getElementById("quiz")).q6.value;
      document.getElementById("btn7").style.backgroundColor = "greenyellow";
      console.log(this.ans);
    } else if (this.i == 7) {
      this.ans[this.i] = (<HTMLFormElement>document.getElementById("quiz")).q7.value;
      document.getElementById("btn8").style.backgroundColor = "greenyellow";
      console.log(this.ans);
    } else if (this.i == 8) {
      this.ans[this.i] = (<HTMLFormElement>document.getElementById("quiz")).q8.value;
      document.getElementById("btn9").style.backgroundColor = "greenyellow";
      console.log(this.ans);
    } else if (this.i == 9) {
      this.ans[this.i] = (<HTMLFormElement>document.getElementById("quiz")).q9.value;
      document.getElementById("btn10").style.backgroundColor = "greenyellow";
      console.log(this.ans);
    }
  }

  review(j: number) {
    if (j == 0) {
      document.getElementById("btn1").style.backgroundColor = "red";
    } else if (j == 1) {
      document.getElementById("btn2").style.backgroundColor = "red";
    } else if (j == 2) {
      document.getElementById("btn3").style.backgroundColor = "red";
    } else if (j == 3) {
      document.getElementById("btn4").style.backgroundColor = "red";
    } else if (j == 4) {
      document.getElementById("btn5").style.backgroundColor = "red";
    } else if (j == 5) {
      document.getElementById("btn6").style.backgroundColor = "red";
    } else if (j == 6) {
      document.getElementById("btn7").style.backgroundColor = "red";
    } else if (j == 7) {
      document.getElementById("btn8").style.backgroundColor = "red";
    } else if (j == 8) {
      document.getElementById("btn9").style.backgroundColor = "red";
    } else if (j == 9) {
      document.getElementById("btn10").style.backgroundColor = "red";
    }
  }

  reset() {
    this.ans = ['---', '---', '---', '---', '---', '---', '---', '---', '---', '---'];
    document.getElementById("btn1").style.backgroundColor = "rgb(59, 57, 57)";
    document.getElementById("btn2").style.backgroundColor = "rgb(59, 57, 57)";
    document.getElementById("btn3").style.backgroundColor = "rgb(59, 57, 57)";
    document.getElementById("btn4").style.backgroundColor = "rgb(59, 57, 57)";
    document.getElementById("btn5").style.backgroundColor = "rgb(59, 57, 57)";
    document.getElementById("btn6").style.backgroundColor = "rgb(59, 57, 57)";
    document.getElementById("btn7").style.backgroundColor = "rgb(59, 57, 57)";
    document.getElementById("btn8").style.backgroundColor = "rgb(59, 57, 57)";
    document.getElementById("btn9").style.backgroundColor = "rgb(59, 57, 57)";
    document.getElementById("btn10").style.backgroundColor = "rgb(59, 57, 57)";
    this.score = 0;
    //this.timer = 0;
    //this.seconds = 0;
  }

  j: number = 0;

  calculate() {
    for (this.j = 0; this.j < 10; this.j++) {
      if (this.ans[this.j] == this.ql[this.j].correctAnswer)
        this.score++;
    }
    console.log(this.score);
  }

  totalscore: number = 0;

  result() {
    this.totalscore = this.level1score + this.level2score + this.level3score;
    //document.getElementById("result").style.visibility = "visible";
    sessionStorage.setItem("test1", this.level1score.toString());
    sessionStorage.setItem("test2", this.level2score.toString());
    sessionStorage.setItem("test3", this.level3score.toString());
    sessionStorage.setItem("total", this.totalscore.toString());
    this.router.navigate(['/resultLink'])
  }

  resultForce() {
    this.calculate();
    if (this.var == 0)
      this.level1score = this.score;
    else if (this.var == 1)
      this.level2score = this.score;
    else
      this.level3score = this.score;
    this.totalscore = this.level1score + this.level2score + this.level3score;
    sessionStorage.setItem("test1", this.level1score.toString());
    sessionStorage.setItem("test2", this.level2score.toString());
    sessionStorage.setItem("test3", this.level3score.toString());
    sessionStorage.setItem("total", this.totalscore.toString());
    this.router.navigate(['/resultLink'])
  }

  startTimer() {
    document.getElementById("timer").style.visibility = "visible";
    this.timer = window.setInterval(() => {
      this.seconds = this.seconds + 1;
      //600 seconds in 10 mins
      if (this.seconds == 600) {
        document.getElementById("timer").style.visibility = "hidden";
        this.resultForce();
      }
    }, 1000);
  }

  displayTimeElapsed(): string {
    let mins = 9 - Math.floor(this.seconds / 60);
    let secs = 60 - Math.floor(this.seconds % 60);
    if (secs == 60) {
      mins++;
      secs = 0;
    }
    if (secs < 10) {
      return mins + ':0' + secs;
    } else {
      return mins + ':' + secs;
    }
  }


}
