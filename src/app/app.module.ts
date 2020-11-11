import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import {AdminpageComponent} from './adminpage/adminpage.component'
import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'
import {RemovequestionComponent} from './removequestion/removequestion.component'
import {StudentsearchComponent} from './studentsearch/studentsearch.component'
import {SubjectsComponent} from './subjects/subjects.component'
import { HomeComponent } from './home/home.component'
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { InstructionComponent } from './instruction/instruction.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionComponent } from './question/question.component';
import { RecaptchaFormsModule,RecaptchaModule } from 'ng-recaptcha';
import { ResultsComponent } from './results/results.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UserService } from ".//user.service";
import { HttpClientModule } from '@angular/common/http';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { JavaQuizComponent } from './java-quiz/java-quiz.component';
import { CCppQuizComponent } from './c-cpp-quiz/c-cpp-quiz.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { TestExamComponent } from './test-exam/test-exam.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminpageComponent,
    LoginComponent,
    RegisterComponent,
    RemovequestionComponent,
    StudentsearchComponent,
    SubjectsComponent,
    HomeComponent,
    LoginAdminComponent,
    ContactUsComponent,
    InstructionComponent,
    QuizComponent,
    QuestionComponent,
    ResultsComponent,
    AboutusComponent,
    ForgetpasswordComponent,
    JavaQuizComponent,
    CCppQuizComponent,
    ComingSoonComponent,
    TestExamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    HttpClientModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
  //bootstrap: [SubjectsComponent]
  //bootstrap: [AdminpageComponent]
  //bootstrap: [LoginComponent]
  //bootstrap: [RegisterComponent]
  //bootstrap: [JavaquizComponent]
 //bootstrap: [HomeComponent]
})
export class AppModule { }
