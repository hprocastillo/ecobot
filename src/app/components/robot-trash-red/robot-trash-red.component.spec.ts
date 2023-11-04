import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotTrashRedComponent } from './robot-trash-red.component';

describe('RobotTrashRedComponent', () => {
  let component: RobotTrashRedComponent;
  let fixture: ComponentFixture<RobotTrashRedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RobotTrashRedComponent]
    });
    fixture = TestBed.createComponent(RobotTrashRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
