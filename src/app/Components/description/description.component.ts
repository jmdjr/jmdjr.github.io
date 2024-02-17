import { Component } from '@angular/core';
import { DESCRIPTION } from '../../../assets/site.data';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.less']
})
export class DescriptionComponent {
  get description() { return DESCRIPTION; }
}
