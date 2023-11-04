import {Component, Input} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {User} from "@angular/fire/auth";

@Component({
  selector: 'app-robot-navbar',
  templateUrl: './robot-navbar.component.html',
  styleUrls: ['./robot-navbar.component.scss']
})
export class RobotNavbarComponent {
  @Input() firebaseUser = {} as User;

  constructor(private authService: AuthService, private router: Router) {
  }

  async logout() {
    try {
      await this.authService.logout();
      await this.router.navigate(['/login']);

    } catch (e) {
      console.log(e);
    }
  }

}
