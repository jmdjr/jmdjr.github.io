import { Component } from '@angular/core';
import { PROJECTS, PROJECTS_TOPTEXT } from '../../../assets/site.data';
import { CommonModule } from '@angular/common';
import { KeenCarouselComponent } from '../../Support/_carousels/keen-carousel/keen-carousel.component';
import { CarouselItemDirective } from '../../Support/_carousels/carousel-item-directive/carousel-item.directive';

@Component({
  selector: 'app-code-projects',
  templateUrl: './code-projects.component.html',
  styleUrls: ['./code-projects.component.css'],
  imports: [KeenCarouselComponent, CarouselItemDirective, CommonModule]
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
