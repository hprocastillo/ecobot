import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {Page404Component} from './components/page404/page404.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgOptimizedImage} from "@angular/common";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {FormsModule} from "@angular/forms";
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {LoginComponent} from "./components/login/login.component";
import {RobotComponent} from "./components/robot/robot.component";
import {RobotHeadComponent} from "./components/robot-head/robot-head.component";
import {RobotTrashBlackComponent} from "./components/robot-trash-black/robot-trash-black.component";
import {RobotUsersRankingComponent} from "./components/robot-users-ranking/robot-users-ranking.component";
import {RobotTrashRedComponent} from "./components/robot-trash-red/robot-trash-red.component";
import {RobotTrashGreenComponent} from "./components/robot-trash-green/robot-trash-green.component";
import {RobotTrashBrownComponent} from "./components/robot-trash-brown/robot-trash-brown.component";
import {RobotNavbarComponent} from "./components/robot-navbar/robot-navbar.component";
import {RobotTalkingComponent} from './components/robot-talking/robot-talking.component';
import {RankingComponent} from './components/ranking/ranking.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page404Component,
    LoginComponent,
    RobotComponent,
    RobotHeadComponent,
    RobotTrashBlackComponent,
    RobotUsersRankingComponent,
    RobotTrashRedComponent,
    RobotTrashGreenComponent,
    RobotTrashBrownComponent,
    RobotNavbarComponent,
    RobotTalkingComponent,
    RankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgOptimizedImage,
    DragDropModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp({
      "projectId": "robot-reciclador",
      "appId": "1:958919274348:web:1d40ab42e9a7ba0aca0d49",
      "storageBucket": "robot-reciclador.appspot.com",
      "apiKey": "AIzaSyDUsdoW2y5DIuyD2jrMrfvL8n2ncbZagFU",
      "authDomain": "robot-reciclador.firebaseapp.com",
      "messagingSenderId": "958919274348",
      "measurementId": "G-685STPRK9B"
    })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
