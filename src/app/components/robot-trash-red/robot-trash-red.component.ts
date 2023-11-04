import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Trash} from "../../interfaces/trash";
import {User} from "@angular/fire/auth";
import {RecycleService} from "../../services/recycle.service";
import {Recycle} from "../../interfaces/recycle";
import {Timestamp} from "firebase/firestore";

@Component({
  selector: 'app-robot-trash-red',
  templateUrl: './robot-trash-red.component.html',
  styleUrls: ['./robot-trash-red.component.scss']
})
export class RobotTrashRedComponent implements OnChanges {
  @Input() firebaseUser = {} as User;
  @Input() trashDropped = {} as Trash;
  @Input() finishAlert: boolean | undefined;
  @Input() tokenSession: string | undefined;
  listTrashRed: Trash[] = [];

  /* TRASH STATES */
  trashState: string = "closed";

  /* TRASH CONTAINERS URL */
  closedUrl: string = "./assets/images/recycling-containers/red/red-closed.png";
  openUrl: string = "./assets/images/recycling-containers/red/red-open.png";
  blockedUrl: string = "./assets/images/recycling-containers/red/red-blocked.png";

  constructor(private recycledService: RecycleService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.finishAlert) {
      this.listTrashRed = [];
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
        case "red":
          this.trashState = "open";
          this.listTrashRed.push(this.trashDropped);
          this.recycledService.addRecycle(recycle).then();

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
