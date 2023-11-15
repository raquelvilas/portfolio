import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ButtonPrimaryComponent } from './components/button-primary/button-primary.component';
import { ButtonSecondaryComponent } from './components/button-secondary/button-secondary.component';

import '@material/web/button/outlined-button.js';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonPrimaryComponent,
    ButtonSecondaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,  
  ],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
