import { Component } from '@angular/core';
import { COMPANY_WORKS } from '../../../assets/site.data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.less'],
  imports: [CommonModule]
})
export class ExperienceComponent {
  get companies() { return COMPANY_WORKS; }
}
