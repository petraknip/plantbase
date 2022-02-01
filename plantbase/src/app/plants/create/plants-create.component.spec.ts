import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsCreateComponent } from './plants-create.component';

describe('PlantsCreateComponent', () => {
  let component: PlantsCreateComponent;
  let fixture: ComponentFixture<PlantsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantsCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
