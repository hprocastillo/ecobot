import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotTrashBrownComponent } from './robot-trash-brown.component';

describe('RobotTrashBrownComponent', () => {
  let component: RobotTrashBrownComponent;
  let fixture: ComponentFixture<RobotTrashBrownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RobotTrashBrownComponent]
    });
    fixture = TestBed.createComponent(RobotTrashBrownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
