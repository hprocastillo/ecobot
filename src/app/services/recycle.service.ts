import {Injectable} from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  CollectionReference,
  doc,
  docData,
  Firestore, orderBy,
  query, where
} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {Recycle} from "../interfaces/recycle";
import {User} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class RecycleService {
  collection: CollectionReference;

  constructor(private firestore: Firestore) {
    this.collection = collection(this.firestore, 'recycles');
  }

  getAllRecycles() {
    const q = query(this.collection, orderBy('createdAt', 'desc'));
    return collectionData(q, {idField: 'id'}) as Observable<Recycle[]>;
  }

  getRecyclesByFirebaseUser(id: string | undefined) {
    const q = query(this.collection, where("uid", "==", id), orderBy('createdAt', 'desc'));
    return collectionData(q, {idField: 'id'}) as Observable<Recycle[]>;
  }

  getUserById(id: string) {
    const ref = doc(this.firestore, `recycles/${id}`);
    return docData(ref, {idField: 'id'}) as Observable<Recycle>;
  }

  addRecycle(recycle: Recycle) {
    return addDoc(this.collection, recycle);
  }
}
