import { Component } from '@angular/core';
import { COMPANY_WORKS } from '../../../assets/site.data';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.less']
})
export class ExperienceComponent {
  get companies() { return COMPANY_WORKS; }
}
