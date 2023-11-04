import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {RecycleService} from "../../services/recycle.service";
import {Recycle} from "../../interfaces/recycle";
import {Subject, takeUntil} from "rxjs";
import {User} from "@angular/fire/auth";

@Component({
  selector: 'app-robot-head',
  templateUrl: './robot-head.component.html',
  styleUrls: ['./robot-head.component.scss']
})
export class RobotHeadComponent implements OnInit, OnDestroy {
  @Input() firebaseUser = {} as User;
  @Input() robotState: string | undefined;
  @Input() finishAlert: boolean | undefined;
  @Input() tokenSession: string | undefined;
  @Output() totalRecycles = new EventEmitter<number>();

  listRecycles: Recycle[] = [];

  private unsubscribe$ = new Subject<boolean>();

  constructor(private recycleService: RecycleService) {
  }

  ngOnInit(): void {
    this.recycleService.getRecyclesByFirebaseUser(this.firebaseUser.uid)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(res => {
        this.listRecycles = res;
        this.listRecycles = this.listRecycles.filter(item => {
          return item.tokenSession === this.tokenSession;
        });
        this.totalRecycles.emit(this.listRecycles.length);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
