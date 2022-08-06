import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryforappsComponent } from './subcategoryforapps.component';

describe('SubcategoryforappsComponent', () => {
  let component: SubcategoryforappsComponent;
  let fixture: ComponentFixture<SubcategoryforappsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcategoryforappsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcategoryforappsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
