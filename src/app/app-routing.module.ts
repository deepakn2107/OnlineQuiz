import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginformComponent } from './components/loginform/loginform.component';
import { RegisterComponent } from './components/register/register.component';
import { StudenthomepageComponent } from './components/studenthomepage/studenthomepage.component';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {path:"", component:WelcomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginformComponent},
  {path:'studenthomepage', component:StudenthomepageComponent},
  {path: 'subcategory', component:SubcategoryComponent}
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
