import {Timestamp} from "firebase/firestore";

export interface Recycle {
  id?: string;
  tokenSession: string;
  uid: string;
  displayName: string | null;

  trashType: string;
  trashDescription: string;

  createdAt: Timestamp;
}
