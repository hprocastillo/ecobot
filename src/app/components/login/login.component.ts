import {Component} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) {
  }

  async loginGoogle() {
    try {
      await this.authService.loginGoogle();
      await this.router.navigate(['robot']);

    } catch (e) {
      console.log(e);
    }
  }
}
