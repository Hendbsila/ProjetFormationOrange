import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeprateListThemeComponent } from './seprate-list-theme.component';

describe('SeprateListThemeComponent', () => {
  let component: SeprateListThemeComponent;
  let fixture: ComponentFixture<SeprateListThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeprateListThemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeprateListThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
