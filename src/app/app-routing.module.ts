import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AdminpageComponent } from './adminpage/adminpage.component'
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { RemovequestionComponent } from './removequestion/removequestion.component'
import { StudentsearchComponent } from './studentsearch/studentsearch.component'
import { SubjectsComponent } from './subjects/subjects.component'
import { LoginAdminComponent } from './login-admin/login-admin.component'
import { ContactUsComponent } from './contact-us/contact-us.component'
import { InstructionComponent } from './instruction/instruction.component'
import { QuestionComponent } from "./question/question.component";
import { QuizComponent } from "./quiz/quiz.component";
import { ResultsComponent } from "./results/results.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { ForgetpasswordComponent } from "./forgetpassword/forgetpassword.component";
import { JavaQuizComponent } from './java-quiz/java-quiz.component';
import { CCppQuizComponent } from './c-cpp-quiz/c-cpp-quiz.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'homeLink', component: HomeComponent },
  { path: 'adminLink', component: AdminpageComponent },
  { path: 'userLink', component: LoginComponent },
  { path: 'subjectLink', component: SubjectsComponent },
  { path: 'studentSearchLink', component: StudentsearchComponent },
  { path: 'registerLink', component: RegisterComponent },
  { path: 'removeLink', component: RemovequestionComponent },
  { path: 'loginAdminLink', component: LoginAdminComponent },
  { path: 'contactLink', component: ContactUsComponent },
  { path: 'instructionLink', component: InstructionComponent },
  { path: 'qnLink', component:QuizComponent}, 
  { path: 'questionLink', component:QuestionComponent },
  { path: 'resultLink' , component:ResultsComponent},
  { path: 'aboutusLink' , component:AboutusComponent},
  { path: 'forgetLink' , component:ForgetpasswordComponent},
  { path: 'javaQLink' , component:JavaQuizComponent },
  { path: 'cCppLink' , component: CCppQuizComponent },
  { path: 'cSoonLink', component: ComingSoonComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
