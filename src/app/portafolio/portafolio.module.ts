import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxSpinnerModule } from 'ngx-spinner';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';

import { PortafolioComponent } from './portafolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { SkillsComponent } from './skills/skills.component';
import { LogrosComponent } from './logros/logros.component';
import { ProjectsComponent } from './projects/projects.component';




@NgModule({
  declarations: [
    PortafolioComponent, 
    AboutComponent, 
    ContactComponent, 
    EducationComponent, 
    ExperienceComponent, 
    FooterComponent, 
    HeaderComponent, 
    IntroComponent, 
    SkillsComponent, LogrosComponent, ProjectsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
  ]
})
export class PortafolioModule { }
