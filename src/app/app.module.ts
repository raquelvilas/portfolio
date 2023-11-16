import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import '@material/web/button/outlined-button.js';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectCardComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
  ],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
