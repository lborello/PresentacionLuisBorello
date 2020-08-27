import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './@components/navbar/navbar.component';
 import {HeaderComponent} from './@components/header/header.component';
import { PortafolioComponent } from './@components/portafolio/portafolio.component';
import { InterestsComponent } from './@components/interests/interests.component';
import { SkillsComponent } from './@components/skills/skills.component';
import { AboutComponent } from './@components/about/about.component';
import { ExperienceComponent } from './@components/experience/experience.component';
import { EducationComponent } from './@components/education/education.component';
import { AwardsComponent } from './@components/awards/awards.component'





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    PortafolioComponent,
    InterestsComponent,
    SkillsComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    AwardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
