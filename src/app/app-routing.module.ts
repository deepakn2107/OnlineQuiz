import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Scorecard } from './common/scorecard';
import { AdminhomepageComponent } from './components/adminhomepage/adminhomepage.component';
import { AllquizesComponent } from './components/allquizes/allquizes.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { RegisterComponent } from './components/register/register.component';
import { ScorecardComponent } from './components/scorecard/scorecard.component';
import { StudentanalysisComponent } from './components/studentanalysis/studentanalysis.component';
import { StudenthomepageComponent } from './components/studenthomepage/studenthomepage.component';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {path:"", component:WelcomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginformComponent},
  {path:'studenthomepage/:studentId', component:StudenthomepageComponent},//main category
  {path: 'subcategory/:quizcatid/:studentId', component:SubcategoryComponent},//subcategory
  // {path:'subcategoryforapps', component:SubcategoryforappsComponent},
  {path:'questions/:quizid/:studentId', component:QuestionsComponent},
  {path:'adminhomepage', component:AdminhomepageComponent},
  {path:'studentanalysis',component:StudentanalysisComponent},
  {path:'scorecard/:studentId', component:ScorecardComponent},
  {path:'allquizes', component:AllquizesComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
