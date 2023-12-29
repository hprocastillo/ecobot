import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {canActivate, redirectLoggedInTo, redirectUnauthorizedTo} from "@angular/fire/auth-guard";
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {RobotComponent} from "./components/robot/robot.component";
import {RankingComponent} from "./components/ranking/ranking.component";
import {Page404Component} from "./components/page404/page404.component";

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'login',
    ...canActivate(() => redirectLoggedInTo(['/robot'])),
    component: LoginComponent
  },
  {
    path: 'robot',
    ...canActivate(() => redirectUnauthorizedTo(['/login'])),
    component: RobotComponent
  },
  {
    path: 'ranking',
    ...canActivate(() => redirectUnauthorizedTo(['/login'])),
    component: RankingComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: '**', component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
