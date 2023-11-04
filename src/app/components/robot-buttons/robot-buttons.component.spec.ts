import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotButtonsComponent } from './robot-buttons.component';

describe('RobotButtonsComponent', () => {
  let component: RobotButtonsComponent;
  let fixture: ComponentFixture<RobotButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RobotButtonsComponent]
    });
    fixture = TestBed.createComponent(RobotButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
