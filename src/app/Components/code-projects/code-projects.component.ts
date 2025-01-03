import { Component } from '@angular/core';
import { PROJECTS, PROJECTS_TOPTEXT } from '../../../assets/site.data';

@Component({
  selector: 'app-code-projects',
  templateUrl: './code-projects.component.html',
  styleUrls: ['./code-projects.component.css']
})
export class CodeProjectsComponent {
  usePlugins: string[] = [
    "stackCard"
  ];

  perspective:number = 15000;

  get perspectiveAmount() { return this.perspective + 'px'; }
  get TopText() { return PROJECTS_TOPTEXT; }
  get MyProjects() {return PROJECTS; }
}
