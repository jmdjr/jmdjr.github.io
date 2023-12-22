import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeenCarouselComponent } from './keen-carousel.component';

describe('KeenCarouselComponent', () => {
  let component: KeenCarouselComponent;
  let fixture: ComponentFixture<KeenCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeenCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeenCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
