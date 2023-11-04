import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotTrashGreenComponent } from './robot-trash-green.component';

describe('RobotTrashGreenComponent', () => {
  let component: RobotTrashGreenComponent;
  let fixture: ComponentFixture<RobotTrashGreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RobotTrashGreenComponent]
    });
    fixture = TestBed.createComponent(RobotTrashGreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
