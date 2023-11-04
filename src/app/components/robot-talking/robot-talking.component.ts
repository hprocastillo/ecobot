import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-robot-talking',
  templateUrl: './robot-talking.component.html',
  styleUrls: ['./robot-talking.component.scss']
})
export class RobotTalkingComponent {
  @Input() robotMessage: string | undefined;
  @Input() questionRecycling: boolean | undefined;
  @Output() answerRecycling = new EventEmitter<string>();

  getRecycling(response: string) {
    this.answerRecycling.emit(response);
  }

}
