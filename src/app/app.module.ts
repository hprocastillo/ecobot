import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {HomeComponent} from './components/home/home.component';
import {Page404Component} from './components/page404/page404.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {RankingComponent} from './components/ranking/ranking.component';
import {RobotComponent} from './components/robot/robot.component';
import {NgOptimizedImage} from "@angular/common";
import {LoginComponent} from "./components/login/login.component";
import {RobotHeadComponent} from "./components/robot/robot-head/robot-head.component";
import {RobotTalkingComponent} from "./components/robot/robot-talking/robot-talking.component";
import {RobotTrashBlackComponent} from "./components/robot/robot-trash-black/robot-trash-black.component";
import {RobotTrashBrownComponent} from "./components/robot/robot-trash-brown/robot-trash-brown.component";
import {RobotTrashGreenComponent} from "./components/robot/robot-trash-green/robot-trash-green.component";
import {RobotTrashRedComponent} from "./components/robot/robot-trash-red/robot-trash-red.component";
import {CdkDrag, CdkDropList} from "@angular/cdk/drag-drop";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page404Component,
    NavbarComponent,
    RankingComponent,
    LoginComponent,
    RobotComponent,
    RobotHeadComponent,
    RobotTalkingComponent,
    RobotTrashBlackComponent,
    RobotTrashBrownComponent,
    RobotTrashGreenComponent,
    RobotTrashRedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
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
    provideFirestore(() => getFirestore()),
    NgOptimizedImage,
    CdkDropList,
    CdkDrag
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
