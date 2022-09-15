import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashListSessionComponent } from './dash-list-session.component';

describe('DashListSessionComponent', () => {
  let component: DashListSessionComponent;
  let fixture: ComponentFixture<DashListSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashListSessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashListSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
