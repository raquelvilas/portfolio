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
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ListProjectsComponent } from './components/projects/list-projects.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailProjectComponent } from './components/detail-project/detail-project.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectCardComponent,
    ListProjectsComponent,
    DetailProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
