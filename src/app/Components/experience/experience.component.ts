import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.less']
})
export class ExperienceComponent {
  companies: any[] = [
    {
      logoURL: "../../../assets/company_logos/Microsoft.png"
    },
    {
      logoURL: "../../../assets/company_logos/CapitalOne.png"
    },
    {
      logoURL: "../../../assets/company_logos/Tulalip-Tribes-Logo.svg"
    }
  ];
}
