import {Component} from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  public image1: string = "./assets/images/states/smiling.png";

  constructor(private authService: AuthService) {
  }

  async loginGoogle() {
    try {
      await this.authService.loginGoogle();
    } catch (e) {
      console.log(e);
    }
  }
}
