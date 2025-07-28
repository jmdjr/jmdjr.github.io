import { AfterViewInit, ChangeDetectorRef, Component, ContentChild, CUSTOM_ELEMENTS_SCHEMA, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance, KeenSliderPlugin } from 'keen-slider';
import { autoSwitcher } from './plugins/auto-switcher';
import { CarouselItemDirective } from '../carousel-item-directive/carousel-item.directive';
import { polygon3D } from './plugins/polygon3D';
import { stackCard } from './plugins/stackCard';
import { KeenPlugin } from './plugins/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'keen-carousel',
  templateUrl: './keen-carousel.component.html',
  styleUrls: ['./keen-carousel.component.css'],
  imports: [CommonModule]
})
export class KeenCarouselComponent implements AfterViewInit, OnInit {
  @ViewChild("sliderRef") sliderRef: ElementRef<HTMLElement>;
  @Input() items : any[] = [];
  @Input() disableAutoInit?:boolean;
  @Input() enableAutoPlay?:boolean;
  @Input() autoPlayDelayMiliseconds? : number;
  @Input() autoPlayAnimationMiliseconds? : number;
  @Input() setPerspective? : string;
  @Input() stackWidthFactor? : number = 1.0;
  @Input() plugins : string[] = [];
  
  @ContentChild(CarouselItemDirective, { read: TemplateRef }) carouselItemTemplate: TemplateRef<{ $implicit: any }>;

  @Output() OnItemActivated: EventEmitter<any> = new EventEmitter<any>();
  @Output() OnShareComponent : EventEmitter<KeenCarouselComponent> = new EventEmitter<KeenCarouselComponent>();

  public slider: KeenSliderInstance | null = null;
  private Current_Item: any;
  get perspective() : string {return `perspective:${this.setPerspective ?? "500px"}`; }

  private PluginsMap = new Map<string, KeenPlugin>(
    [
      ["stackCard", stackCard(this.stackWidthFactor ?? 1, -5)], 
      ["polygon3D", polygon3D],
    ]);

  ngOnInit(): void {
    this.OnShareComponent?.emit(this);
    this.PluginsMap.set("autoSwitcher", autoSwitcher(this.autoPlayAnimationMiliseconds || 1000))
  }

  constructor(
    private ref: ChangeDetectorRef) {
     }

  ngAfterViewInit() {
    if(!this.disableAutoInit) {
      this.initialize();
    }
    
    this.ref.detectChanges();
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
  }

  initialize() {
    const delayMS = this.autoPlayDelayMiliseconds ?? 5000;
    const animationMS = this.autoPlayAnimationMiliseconds ?? 3000; 
    let plugins: KeenPlugin[] = [];

    if(this.plugins.length) {
      for(let plug in this.plugins) {
        const name = this.plugins[plug];
        const plugin = this.PluginsMap.get(name);
        if (plugin) {
          plugins.push(plugin);
        }
      }
    }

    if(this.enableAutoPlay){
      plugins.push(autoSwitcher(delayMS));
    }
    
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      loop:true,
      defaultAnimation: {
        duration: animationMS
      },
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap"
    }, plugins);

    this.ActivateItem();

    this.slider.on("slideChanged", (_) => {
      this.ActivateItem();
    })
  }

  ActivateItem() {
    //get the active item as a CarouselData
    const indx = this.slider?.track?.details?.rel;
    if(indx === undefined) return;
    this.Current_Item = this.items[indx];
    this.OnItemActivated.emit(this.Current_Item);
  }
}
