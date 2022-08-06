import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllquizesComponent } from './allquizes.component';

describe('AllquizesComponent', () => {
  let component: AllquizesComponent;
  let fixture: ComponentFixture<AllquizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllquizesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllquizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
