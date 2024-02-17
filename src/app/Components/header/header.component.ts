import { Component } from '@angular/core';
import { HEADING } from '../../../assets/site.data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {

  get heading() { return HEADING; }
}
