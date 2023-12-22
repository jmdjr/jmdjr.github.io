import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TechnologiesComponent } from './Components/technologies/technologies.component';
import { CodeProjectsComponent } from './Components/code-projects/code-projects.component';
import { HeaderComponent } from './Components/header/header.component';
import { ExperienceComponent } from './Components/experience/experience.component';
import { FooterComponent } from './Components/footer/footer.component';
import { DescriptionComponent } from './Components/description/description.component';
import { KeenCarouselModule } from './Support/_carousels/keen_carousel.module';

@NgModule({
  declarations: [
    AppComponent
    , TechnologiesComponent
    , CodeProjectsComponent
    , HeaderComponent
    , ExperienceComponent
    , FooterComponent
    , DescriptionComponent
  ],
  imports: [
    BrowserModule
    , KeenCarouselModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
