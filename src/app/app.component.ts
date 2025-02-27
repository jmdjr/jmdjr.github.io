import { Component } from '@angular/core';
import { AppTemplateBaseComponent, ComponentModule } from 'personal-site-template/src/app/app.component';
import { CodeProjectsComponent } from './Components/code-projects/code-projects.component';
import { DescriptionComponent } from './Components/description/description.component';
import { TechnologiesComponent } from './Components/technologies/technologies.component';
import { HeaderService } from 'personal-site-template/src/app/services/header.service';
import { HEADING, PROJECT_NAME } from '../assets/site.data';
import { ProjectDataTrackerService } from 'personal-site-template/src/app/services/ProjectDataTracker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  imports: [AppTemplateBaseComponent]
})
export class AppComponent {
  modules: ComponentModule[] = [
    new ComponentModule(DescriptionComponent),
    new ComponentModule(CodeProjectsComponent),
    new ComponentModule(TechnologiesComponent)
  ]

  constructor(private header: HeaderService,
    private project: ProjectDataTrackerService
  ) {
    this.header.heading = HEADING;
    this.project.name = PROJECT_NAME;
  }
}
