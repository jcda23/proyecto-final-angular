import { AddUser } from './../../models/add-user.interface';
import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  Firestore,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore';
import {
  getDownloadURL,
  ref,
  Storage,
  uploadBytes,
} from '@angular/fire/storage';
import { from, Observable, of, switchMap } from 'rxjs';
import { ProfileUser } from '../../models/user.interface';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(
    private firestore: Firestore,
    private authService: AuthService,
    private storage: Storage
  ) {}

  get currentUserProfile$(): Observable<ProfileUser | null> {
    return this.authService.currentUser$.pipe(
      switchMap((user) => {
        if (!user?.uid) {
          return of(null);
        }
        const ref = doc(this.firestore, 'users', user?.uid);
        return docData(ref) as Observable<ProfileUser>;
      })
    );
  }

  addUser(user: ProfileUser): Observable<void> {
    const ref = doc(this.firestore, 'users', user.uid);
    return from(setDoc(ref, user));
  }

  updateUser(user: ProfileUser): Observable<void> {
    const ref = doc(this.firestore, 'users', user.uid);
    return from(updateDoc(ref, { ...user }));
  }

  uploadImage(image: File, path: string): Observable<string> {
    const storageRef = ref(this.storage, path);
    const uploadTask = from(uploadBytes(storageRef, image));
    return uploadTask.pipe(switchMap((result) => getDownloadURL(result.ref)));
  }

  getUser(id: string) {
    const userRef = doc(this.firestore, `users/${id}`);
    return docData(userRef, { idField: 'id' });
  }

  getUsers(): Observable<ProfileUser[]> {
    const userRef = collection(this.firestore, 'users');
    return collectionData(userRef, { idField: 'id' }) as Observable<
      ProfileUser[]
    >;
  }

  createUser(user: AddUser) {
    const userRef = collection(this.firestore, 'fakeUsers');
    return addDoc(userRef, user);
  }

  getFakeUsers(): Observable<AddUser[]> {
    const userRef = collection(this.firestore, 'fakeUsers');
    return collectionData(userRef, { idField: 'id' }) as Observable<AddUser[]>;
  }

  deleteFakeUsers(user: AddUser) {
    const userDocumentReference = doc(this.firestore, `fakeUsers/${user.id}`);
    return deleteDoc(userDocumentReference);
  }
}
