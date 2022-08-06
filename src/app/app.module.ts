import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { HttpClientModule } from '@angular/common/http';
import { StudenthomepageComponent } from './components/studenthomepage/studenthomepage.component';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';
import { SubcategoryforappsComponent } from './components/subcategoryforapps/subcategoryforapps.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { AdminhomepageComponent } from './components/adminhomepage/adminhomepage.component';
import { StudentanalysisComponent } from './components/studentanalysis/studentanalysis.component';
import { ScorecardComponent } from './components/scorecard/scorecard.component';
import { AllquizesComponent } from './components/allquizes/allquizes.component';

@NgModule({
  declarations: [
    AppComponent,
  
    RegisterComponent,
    WelcomeComponent,
    LoginformComponent,
    StudenthomepageComponent,
    SubcategoryComponent,
    SubcategoryforappsComponent,
    QuestionsComponent,
    AdminhomepageComponent,
    StudentanalysisComponent,
    ScorecardComponent,
    AllquizesComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatToolbarModule,
    HttpClientModule,
    MatListModule,
    MatCardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
