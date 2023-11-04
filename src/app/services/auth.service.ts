import {Injectable} from '@angular/core';
import {
  Auth,
  User,
  authState,
  signOut, GoogleAuthProvider,
  onAuthStateChanged, signInWithPopup
} from "@angular/fire/auth";
import {EMPTY, Observable} from "rxjs";
import {UsersService} from "./users.service";
import {Timestamp} from "firebase/firestore";
import {Users} from "../interfaces/users";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user$: Observable<User | null> = EMPTY;

  constructor(private fireAuth: Auth, private usersService: UsersService) {
    onAuthStateChanged(this.fireAuth, (user) => {
      this.user$ = authState(fireAuth);
      if (user) {
        this.usersService.getUserById(user.uid)
          .subscribe(res => {
            if (!res) {
              let newUser = {} as Users;
              newUser.id = user.uid;
              newUser.displayName = user.displayName;
              newUser.email = user.email;
              newUser.photoURL = user.photoURL;
              newUser.createdBy = user.uid;
              newUser.createdAt = Timestamp.fromDate(new Date());
              newUser.updatedBy = user.uid;
              newUser.updatedAt = Timestamp.fromDate(new Date());
              this.usersService.setUserFromFirebase(newUser)
                .then()
                .catch(e => console.log(e));
            } else {
              console.log(res.email)
            }
          })
      }
    });
  }

  loginGoogle() {
    return signInWithPopup(this.fireAuth, new GoogleAuthProvider());
  }

  logout() {
    return signOut(this.fireAuth);
  }
}
