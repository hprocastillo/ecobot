import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotTalkingComponent } from './robot-talking.component';

describe('RobotTalkingComponent', () => {
  let component: RobotTalkingComponent;
  let fixture: ComponentFixture<RobotTalkingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RobotTalkingComponent]
    });
    fixture = TestBed.createComponent(RobotTalkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
