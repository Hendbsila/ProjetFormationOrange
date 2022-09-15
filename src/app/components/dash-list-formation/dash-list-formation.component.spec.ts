import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashListFormationComponent } from './dash-list-formation.component';

describe('DashListFormationComponent', () => {
  let component: DashListFormationComponent;
  let fixture: ComponentFixture<DashListFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashListFormationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashListFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
