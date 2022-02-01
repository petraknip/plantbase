import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsCollectionComponent } from './plants-collection.component';

describe('PlantsCollectionComponent', () => {
  let component: PlantsCollectionComponent;
  let fixture: ComponentFixture<PlantsCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantsCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantsCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
