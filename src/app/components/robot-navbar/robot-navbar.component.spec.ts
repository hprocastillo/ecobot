import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotNavbarComponent } from './robot-navbar.component';

describe('RobotNavbarComponent', () => {
  let component: RobotNavbarComponent;
  let fixture: ComponentFixture<RobotNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RobotNavbarComponent]
    });
    fixture = TestBed.createComponent(RobotNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
