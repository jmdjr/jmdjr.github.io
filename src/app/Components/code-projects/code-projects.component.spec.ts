import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodeProjectsComponent } from './code-projects.component';
import { KeenCarouselModule } from '../../Support/_carousels/keen_carousel.module';

describe('CodeProjectsComponent', () => {
  let component: CodeProjectsComponent;
  let fixture: ComponentFixture<CodeProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeProjectsComponent],
      imports: [KeenCarouselModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
