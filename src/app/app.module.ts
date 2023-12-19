import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TechnologiesComponent } from './Components/technologies/technologies.component';
import { CodeProjectsComponent } from './Components/code-projects/code-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    TechnologiesComponent
  , CodeProjectsComponent],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
