import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotUsersRankingComponent } from './robot-users-ranking.component';

describe('RobotUsersRankingComponent', () => {
  let component: RobotUsersRankingComponent;
  let fixture: ComponentFixture<RobotUsersRankingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RobotUsersRankingComponent]
    });
    fixture = TestBed.createComponent(RobotUsersRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
