import {Timestamp} from "firebase/firestore";

export interface Users {
  id: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  createdAt: Timestamp;
  createdBy: string;
}
