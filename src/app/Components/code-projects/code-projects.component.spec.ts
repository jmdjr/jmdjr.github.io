import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodeProjectsComponent } from './code-projects.component';

describe('CodeProjectsComponent', () => {
  let component: CodeProjectsComponent;
  let fixture: ComponentFixture<CodeProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeProjectsComponent]
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
