import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotTrashBlackComponent } from './robot-trash-black.component';

describe('RobotTrashBlackComponent', () => {
  let component: RobotTrashBlackComponent;
  let fixture: ComponentFixture<RobotTrashBlackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RobotTrashBlackComponent]
    });
    fixture = TestBed.createComponent(RobotTrashBlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
