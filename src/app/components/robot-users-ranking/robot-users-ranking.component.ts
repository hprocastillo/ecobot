import {Component, Input} from '@angular/core';
import {User} from "@angular/fire/auth";

@Component({
  selector: 'app-robot-users-ranking',
  templateUrl: './robot-users-ranking.component.html',
  styleUrls: ['./robot-users-ranking.component.scss']
})
export class RobotUsersRankingComponent {
  @Input() firebaseUser = {} as User;

}
