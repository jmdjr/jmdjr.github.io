import { CommonModule } from '@angular/common';
import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[CarouselItem]',
})
export class CarouselItemDirective {
  constructor(private templateRef: TemplateRef<any>) {
  }
}