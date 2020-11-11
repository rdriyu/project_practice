import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {

  constructor(private router: Router) { }
  ans = document.getElementById("theresult")
  levelcounter = 0;
  hidden: boolean = true;

  mark() {

    //document.getElementById("quizpage").style.display = "none";
    var c = 0;

    var q1 = (<HTMLFormElement>document.getElementById("quiz")).q1.value;

    var q2 = (<HTMLFormElement>document.getElementById("quiz")).q2.value;
    var q3 = (<HTMLFormElement>document.getElementById("quiz")).q3.value;
    var q4 = (<HTMLFormElement>document.getElementById("quiz")).q4.value;
    var q5 = (<HTMLFormElement>document.getElementById("quiz")).q5.value;
    var q6 = (<HTMLFormElement>document.getElementById("quiz")).q6.value;
    var q7 = (<HTMLFormElement>document.getElementById("quiz")).q7.value;
    var q8 = (<HTMLFormElement>document.getElementById("quiz")).q8.value;
    var q9 = (<HTMLFormElement>document.getElementById("quiz")).q9.value;
    var q10 = (<HTMLFormElement>document.getElementById("quiz")).q10.value;

    if (q1 == 1) { c++; };
    if (q2 == 3) { c++; };
    if (q3 == 2) { c++; };
    if (q4 == 4) { c++; };
    if (q5 == 4) { c++; };
    if (q6 == 4) { c++; };
    if (q7 == 4) { c++; };
    if (q8 == 4) { c++; };
    if (q9 == 4) { c++; };
    if (q10 == 4) { c++; };

    
   
    if (c >= 6) {

      this.levelcounter++;
    if (this.levelcounter == 1 || this.levelcounter == 2 ) {
      
     
        document.getElementById('bt1').style.visibility = 'hidden';
        document.getElementById('bt2').style.visibility = 'visible';

      }
      else {
        document.getElementById('bt1').style.visibility = 'visible';
        document.getElementById('bt2').style.visibility = 'hidden';
      }

    
    } 

    else{
      document.getElementById('bt1').style.visibility = 'visibe';
      document.getElementById('bt2').style.visibility = 'hidden';
    }
      

    

    // document.getElementById("theresult").style.display="block";



    // this.router.navigate(['/pass']);

    //  document.getElementById("result").innerHTML = "Your Result is " + c + "/10. You have done well";
    /*if (c >= 6) {

      this.levelcounter++;
      if (this.levelcounter == 3) {
        document.getElementById('bt1').style.visibility = 'visible';
        document.getElementById('bt2').style.visibility = 'hidden';
 
      }
      else {
        document.getElementById('bt1').style.visibility = 'hidden';
        document.getElementById('bt2').style.visibility = 'hidden';
      }
 
    }
 
    else {
      //    document.getElementById("result").innerHTML = "Your Result is " + c + "/10.FAIL";
      document.getElementById('bt1').style.visibility = 'visible';
      document.getElementById('bt2').style.visibility = 'hidden';
 
    }*/
  }




  level(){
    document.getElementById('bt1').style.visibility = 'hidden';
    document.getElementById('bt2').style.visibility = 'hidden';

  }





  //  hidden = false;
  //  action() {
  //    this. hidden = !this.hidden;
  //     if(this.hidden) {
  //         document.getElementById('togglee').style.visibility = 'hidden';
  //     } else {
  //         document.getElementById('togglee').style.visibility = 'visible';
  //     }
  //   }

  //  isShown: boolean = false ; // hidden by default


  //   toggleShow() {

  //   this.isShown = ! this.isShown;

  //   }


  ngOnInit(): void {


    window.onload = function () {
      var minute = 5;
      var sec = 60;
      setInterval(function () {
        document.getElementById("timer").innerHTML = minute + " : " + sec;
        sec--;
        if (sec == 0o0) {
          minute--;
          sec = 60;
          if (minute == 0) {
            minute = 5;
          }
        }
      }, 1000);
    }



  }






}
