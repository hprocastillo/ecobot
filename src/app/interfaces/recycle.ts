import {Timestamp} from "firebase/firestore";

export interface Recycle {
  id: string;
  uid: string;
  displayName: string | null;
  trashType: string;
  trashDescription: string;
  createdAt: Timestamp;
}
