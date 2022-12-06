import { Injectable } from '@angular/core';
import { Auth, User, GoogleAuthProvider } from '@angular/fire/auth';
import { from, map, Observable, Subject, takeUntil } from 'rxjs';

import { Router } from '@angular/router';
import { WrapperFunctionFirebase } from 'src/app/shared/utils/firebase-wrapper';
import { HotToastService } from '@ngneat/hot-toast';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser$ = WrapperFunctionFirebase.authState(this.auth);
  uidAdmin1: string = 'QchNxmiJZBMLopzmOIVrCwc9Xwx1';
  uidAdmin2: string = 'XEo4ksXdrgOwjZunHp1WuKjVjZq2';
  destroyed$ = new Subject<void>();

  constructor(
    public auth: Auth,
    public router: Router,
    public toast: HotToastService
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
          localStorage.setItem('userUid', JSON.stringify(user.uid));
        } else {
          localStorage.setItem('userUid', 'null');
        }
      });
  }

  getStatus() {
    return this.currentUser$;
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
