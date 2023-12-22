import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { KeenCarouselComponent } from "./keen-carousel/keen-carousel.component";
import { CarouselItemDirective } from "./carousel-item-directive/carousel-item.directive";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    KeenCarouselComponent
    , CarouselItemDirective
  ],
  exports: [
    KeenCarouselComponent
    , CarouselItemDirective
  ],
  imports: [
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class KeenCarouselModule { }
