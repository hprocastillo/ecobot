import {Component} from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html'
})
export class RankingComponent {
  public image1: string = "./assets/images/states/smiling.png";

  constructor(public authService: AuthService) {
  }
}
