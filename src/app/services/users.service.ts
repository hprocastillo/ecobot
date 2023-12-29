import {Injectable} from '@angular/core';
import {
  collection,
  collectionData,
  CollectionReference,
  doc,
  docData,
  Firestore, orderBy,
  query, setDoc,
} from "@angular/fire/firestore";
import {Users} from "../interfaces/users";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  collection: CollectionReference;
  constructor(private firestore: Firestore) {
    this.collection = collection(this.firestore, 'users');
  }
  getAllUsers() {
    const q = query(this.collection, orderBy('createdAt', 'desc'));
    return collectionData(q, {idField: 'id'}) as Observable<Users[]>;
  }
  getUserById(id: string) {
    const ref = doc(this.firestore, `users/${id}`);
    return docData(ref, {idField: 'id'}) as Observable<Users>;
  }
  setUserFromFirebase(users: Users) {
    const ref = doc(this.firestore, `users/${users.id}`);
    return setDoc(ref, users);
  }
}
