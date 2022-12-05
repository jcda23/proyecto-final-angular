import { ProfileUser } from './../../models/user.interface';
import { Injectable, NgZone } from '@angular/core';
import { Auth, User, GoogleAuthProvider } from '@angular/fire/auth';
import { from, map, Observable, Subject, takeUntil } from 'rxjs';

import { Router } from '@angular/router';
import { WrapperFunctionFirebase } from 'src/app/shared/utils/firebase-wrapper';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser$ = WrapperFunctionFirebase.authState(this.auth);
  userData: ProfileUser;
  isAuthenticated: boolean = false;
  destroyed$ = new Subject<void>();

  constructor(
    public auth: Auth,
    public router: Router,
    private ngZone: NgZone
  ) {
    this.currentUser$
      .pipe(
        map((user: any) =>
          user !== null
            ? ({
                uid: user.uid,
                displayName: user.displayName,
                photoURL: user.photoURL,
                email: user.email,
              } as User)
            : null
        ),
        takeUntil(this.destroyed$)
      )
      .subscribe((user: any) => {
        if (user) {
          this.isAuthenticated = true;
          this.userData = user;
          localStorage.setItem('user', JSON.stringify(this.userData));
          localStorage.setItem('userUid', JSON.stringify(this.userData?.uid));
          JSON.parse(localStorage.getItem('user')!);
        } else {
          this.isAuthenticated = false;
          localStorage.setItem('user', 'null');
          JSON.parse(localStorage.getItem('user')!);
        }
      });
  }

  get authenticated(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null || this.isAuthenticated === true ? true : false;
  }

  logout(): Observable<any> {
    return from(this.auth.signOut());
  }

  signInWithGoogle(): Observable<any> {
    return from(
      WrapperFunctionFirebase.signInWithPopup(
        this.auth,
        new GoogleAuthProvider()
      )
    );
  }

  login(email: string, password: string): Observable<any> {
    return from(
      WrapperFunctionFirebase.signInWithEmailAndPassword(
        this.auth,
        email,
        password
      )
    );
  }

  register(email: string, password: string): Observable<any> {
    return from(
      WrapperFunctionFirebase.createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      )
    );
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }
}
