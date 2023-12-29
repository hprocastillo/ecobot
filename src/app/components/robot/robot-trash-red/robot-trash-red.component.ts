import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Trash} from "../../../interfaces/trash";

@Component({
  selector: 'app-robot-trash-red',
  templateUrl: './robot-trash-red.component.html'
})
export class RobotTrashRedComponent implements OnChanges {
  @Input() trashDropped = {} as Trash;
  @Input() systemState: string | undefined;
  @Output() trashRecycled = new EventEmitter<Trash>();
  public listTrashRed: Trash[] = [];
  /** TRASH STATES **/
  public trashState: string = "closed";
  /** TRASH CONTAINER **/
  public closed: string = "./assets/images/trash-containers/red.png";
  public correct: string = "./assets/images/trash-containers/red-correct.png";
  public wrong: string = "./assets/images/trash-containers/red-wrong.png";

  ngOnChanges(changes: SimpleChanges): void {
    if (this.systemState === "standby") {
      this.listTrashRed = [];
    }

    if (this.trashDropped) {
      switch (this.trashDropped.type) {
        case "black":
          this.trashState = "wrong";
          setTimeout(() => {
            this.trashState = "closed"
          }, 2000);
          break;
        case "red":
          this.trashState = "correct";
          this.listTrashRed.push(this.trashDropped);
          this.trashRecycled.emit(this.trashDropped);
          setTimeout(() => {
            this.trashState = "closed"
          }, 2000);
          break;
        case "green":
          this.trashState = "wrong";
          setTimeout(() => {
            this.trashState = "closed"
          }, 2000);
          break;
        case "brown":
          this.trashState = "wrong";
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
