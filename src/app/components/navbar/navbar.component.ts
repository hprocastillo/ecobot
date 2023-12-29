import {Component, Input} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {User} from "@angular/fire/auth";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  @Input() firebaseUser = {} as User;
  public collapsed: boolean = true;
  public image1: string = "./assets/images/robot-states/confirm.png";

  constructor(private authService: AuthService) {
  }

  async logout() {
    try {
      await this.authService.logout();
    } catch (e) {
      console.log(e);
    }
  }
}
