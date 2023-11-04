import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Trash} from "../../interfaces/trash";
import {User} from "@angular/fire/auth";
import {RecycleService} from "../../services/recycle.service";
import {Recycle} from "../../interfaces/recycle";
import {Timestamp} from "firebase/firestore";

@Component({
  selector: 'app-robot-trash-green',
  templateUrl: './robot-trash-green.component.html',
  styleUrls: ['./robot-trash-green.component.scss']
})
export class RobotTrashGreenComponent implements OnChanges {
  @Input() firebaseUser = {} as User;
  @Input() trashDropped = {} as Trash;
  @Input() finishAlert: boolean | undefined;
  @Input() tokenSession: string | undefined;
  listTrashGreen: Trash[] = [];

  /* TRASH STATES */
  trashState: string = "closed";

  /* TRASH CONTAINERS URL */
  closedUrl: string = "./assets/images/recycling-containers/green/green-closed.png";
  openUrl: string = "./assets/images/recycling-containers/green/green-open.png";
  blockedUrl: string = "./assets/images/recycling-containers/green/green-blocked.png";

  constructor(private recycledService: RecycleService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.finishAlert) {
      this.listTrashGreen = [];
    }

    if (this.trashDropped) {
      let recycle = {} as Recycle;
      recycle.uid = this.firebaseUser.uid;
      if (this.tokenSession) recycle.tokenSession = this.tokenSession;
      recycle.displayName = this.firebaseUser.displayName;
      recycle.trashType = this.trashDropped.type;
      recycle.trashDescription = this.trashDropped.description;
      recycle.createdAt = Timestamp.fromDate(new Date());

      switch (this.trashDropped.type) {
        case "green":
          this.trashState = "open";
          this.listTrashGreen.push(this.trashDropped);
          this.recycledService.addRecycle(recycle).then();

          setTimeout(() => {
            this.trashState = "closed"
          }, 2000);
          break;
        case "red":
          this.trashState = "blocked";
          setTimeout(() => {
            this.trashState = "closed"
          }, 2000);
          break;
        case "black":
          this.trashState = "blocked";
          setTimeout(() => {
            this.trashState = "closed"
          }, 2000);
          break;
        case "brown":
          this.trashState = "blocked";
          setTimeout(() => {
            this.trashState = "closed"
          }, 2000);
          break;
        case undefined:
          this.trashState = "closed"
          break;
        default:
          break;
      }
    }
  }
}
