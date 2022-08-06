import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentanalysisComponent } from './studentanalysis.component';

describe('StudentanalysisComponent', () => {
  let component: StudentanalysisComponent;
  let fixture: ComponentFixture<StudentanalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentanalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
