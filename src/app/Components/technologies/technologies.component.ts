import { Component } from '@angular/core';
import { EXPERIENCE } from '../../../assets/site.data';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.less']
})
export class TechnologiesComponent {
  get experience() { return EXPERIENCE; }
  techList:any[] = [];
}

