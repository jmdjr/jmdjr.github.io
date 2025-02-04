import { Component } from '@angular/core';
import { EXPERIENCE } from '../../../assets/site.data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.less'],
  imports: [CommonModule]
})
export class TechnologiesComponent {
  get experience() { return EXPERIENCE; }
  techList:any[] = [];
}

