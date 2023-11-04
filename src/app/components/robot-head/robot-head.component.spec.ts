import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotHeadComponent } from './robot-head.component';

describe('RobotHeadComponent', () => {
  let component: RobotHeadComponent;
  let fixture: ComponentFixture<RobotHeadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RobotHeadComponent]
    });
    fixture = TestBed.createComponent(RobotHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
