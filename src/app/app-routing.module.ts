import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomepageComponent } from './components/adminhomepage/adminhomepage.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { RegisterComponent } from './components/register/register.component';
import { StudentanalysisComponent } from './components/studentanalysis/studentanalysis.component';
import { StudenthomepageComponent } from './components/studenthomepage/studenthomepage.component';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';
import { SubcategoryforappsComponent } from './components/subcategoryforapps/subcategoryforapps.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {path:"", component:WelcomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginformComponent},
  {path:'studenthomepage', component:StudenthomepageComponent},//main category
  {path: 'subcategory/:quizcatid', component:SubcategoryComponent},//subcategory
  {path:'subcategoryforapps', component:SubcategoryforappsComponent},
  {path:'questions/:quizid', component:QuestionsComponent},
  {path:'adminhomepage', component:AdminhomepageComponent},
  {path:'studentanalysis',component:StudentanalysisComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
