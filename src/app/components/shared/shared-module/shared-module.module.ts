import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';
import { HomeComponent } from '../../home/home.component';
import { AboutComponent } from '../../about/about.component';
import { SkillsComponent } from '../../skills/skills.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavbarComponent,  // Export NavbarComponent so it can be used in other modules
    HomeComponent,
    AboutComponent,
    SkillsComponent
  ]
})
export class SharedModuleModule { }
