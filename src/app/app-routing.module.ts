import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomepageComponent } from './components/adminhomepage/adminhomepage.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { RegisterComponent } from './components/register/register.component';
import { StudenthomepageComponent } from './components/studenthomepage/studenthomepage.component';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';
import { SubcategoryforappsComponent } from './components/subcategoryforapps/subcategoryforapps.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {path:"", component:WelcomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginformComponent},
  {path:'studenthomepage', component:StudenthomepageComponent},
  {path: 'subcategory', component:SubcategoryComponent},
  {path:'subcategoryforapps', component:SubcategoryforappsComponent},
  {path:'questions', component:QuestionsComponent},
  {path:'adminhomepage', component:AdminhomepageComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
