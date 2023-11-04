import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Trash} from "../../interfaces/trash";
import {RecycleService} from "../../services/recycle.service";
import {Recycle} from "../../interfaces/recycle";
import {User} from "@angular/fire/auth";
import {Timestamp} from "firebase/firestore";

@Component({
  selector: 'app-robot-trash-black',
  templateUrl: './robot-trash-black.component.html',
  styleUrls: ['./robot-trash-black.component.scss']
})
export class RobotTrashBlackComponent implements OnChanges {
  @Input() firebaseUser = {} as User;
  @Input() trashDropped = {} as Trash;
  @Input() finishAlert: boolean | undefined;
  @Input() tokenSession: string | undefined;
  listTrashBlack: Trash[] = [];

  /* TRASH STATES */
  trashState: string = "closed";

  /* TRASH CONTAINERS URL */
  closedUrl: string = "./assets/images/recycling-containers/black/black-closed.png";
  openUrl: string = "./assets/images/recycling-containers/black/black-open.png";
  blockedUrl: string = "./assets/images/recycling-containers/black/black-blocked.png";

  constructor(private recycledService: RecycleService) {

  }

  ngOnChanges(changes: SimpleChanges): void {
      if (this.finishAlert) {
      this.listTrashBlack = [];
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
        case "black":
          this.trashState = "open";
          this.listTrashBlack.push(this.trashDropped);
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
        case "green":
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
