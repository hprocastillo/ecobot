import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Recycle} from "../../interfaces/recycle";
import {Subject, takeUntil} from "rxjs";
import {RecycleService} from "../../services/recycle.service";
import {Users} from "../../interfaces/users";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit, OnDestroy {

  listUsers: Users[] = [];
  listRecycles: Recycle[] = [];

  listRanking: any[] = [];
  page: number = 1;
  pageSize: number = 10;

  private unsubscribe$ = new Subject<boolean>();

  constructor(
    public authService: AuthService,
    private recycleService: RecycleService,
    private usersService: UsersService) {
  }

  ngOnInit(): void {
    let counterUsers: number = 0;

    this.usersService.getAllUsers()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(res => {
        this.listUsers = res;

        if (counterUsers === 1) {

          if (this.listUsers.length > 0) {

            for (let i: number = 0; i < this.listUsers.length; i++) {
              this.recycleService.getRecyclesByFirebaseUser(this.listUsers[i].id)
                .pipe(takeUntil(this.unsubscribe$))
                .subscribe(res => {
                  this.listRecycles = res;

                  if (this.listRecycles.length > 0) {
                    this.listRanking.push({
                      displayName: this.listUsers[i].displayName,
                      amount: this.listRecycles.length
                    });
                    this.listRanking.sort((a, b) =>  b.amount - a.amount);
                  }
                });
            }
          }
        }
        counterUsers++;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
