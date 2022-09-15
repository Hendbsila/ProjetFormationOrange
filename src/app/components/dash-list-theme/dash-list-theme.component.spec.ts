import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashListThemeComponent } from './dash-list-theme.component';

describe('DashListThemeComponent', () => {
  let component: DashListThemeComponent;
  let fixture: ComponentFixture<DashListThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashListThemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashListThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
