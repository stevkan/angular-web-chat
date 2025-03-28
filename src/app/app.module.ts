import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Bot1Component } from './bot1/bot1.component';
import { Bot2Component } from './bot2/bot2.component';

@NgModule({
  declarations: [
    AppComponent,
    Bot1Component,
    Bot2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
