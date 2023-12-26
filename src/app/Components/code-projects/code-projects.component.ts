import { Component } from '@angular/core';
import { CodeProject } from '../../Models/CodeProject.data';
import { KeenCarouselComponent } from '../../Support/_carousels/keen-carousel/keen-carousel.component';

@Component({
  selector: 'app-code-projects',
  templateUrl: './code-projects.component.html',
  styleUrls: ['./code-projects.component.css']
})
export class CodeProjectsComponent {
  usePlugins: string[] = [
    "stackCard"
  ];

  MyProjects: CodeProject[] = [
    {
      name: "Projects",
      description: "Comming Soon...",
      image: "../../../assets/Placeholder.png"
    }
  ];

  /*MyProjects: CodeProject[] = [
    {
      name: 'Hexaduko',
      description: 'My first solo game I try for profit!',
      links: [
        {
          text: 'Github',
          URL: 'https://github.com/jmdjr/Hexaduko'
        }
      ]
    }
  ];*/
}
