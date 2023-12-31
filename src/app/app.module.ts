import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import '@material/web/button/outlined-button.js';
import '@material/web/button/filled-button.js';
import { ProjectCardComponent } from './components/list-projects/project-card/project-card.component';
import { ListProjectsComponent } from './components/list-projects/list-projects.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailProjectComponent } from './components/detail-project/detail-project.component';
import { FormsModule } from '@angular/forms';
import { ProjectSectionComponent } from './components/detail-project/project-section/project-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectCardComponent,
    ListProjectsComponent,
    DetailProjectComponent,
    ProjectSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
