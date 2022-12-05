import { Auth, User, UserCredential } from '@angular/fire/auth';
import { MockBuilder, ngMocks } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';
import { WrapperFunctionFirebase } from 'src/app/shared/utils/firebase-wrapper';
import { AuthService } from './auth.service';

fdescribe('AuthService', () => {
  let authService: AuthService;
  const auth = jasmine.createSpy();
  const authState$ = new BehaviorSubject<User | null>(null);

  beforeEach(async () => {
    spyOn(WrapperFunctionFirebase, 'authState').and.returnValue(authState$);

    await MockBuilder(AuthService).provide({ provide: Auth, useValue: auth });

    authService = ngMocks.findInstance(AuthService);
  });

  it('should be created', () => {
    expect(authService).toBeDefined();
  });

  //! Usuario invalido
  it('Debe manejar el usuario nulo', (done: DoneFn) => {
    authState$.next(null);
    authService.currentUser$.pipe(first()).subscribe({
      next: (v) => {
        expect(v).toBeNull();
        done();
      },
      error: done.fail,
    });
  });

  //! Sesion con google
  it('Debe llamar el método de inicio de sesión con cuenta google', (done: DoneFn) => {
    spyOn(WrapperFunctionFirebase, 'signInWithPopup').and.returnValue(
      Promise.resolve({} as unknown as UserCredential)
    );
    authService
      .signInWithGoogle()
      .pipe(first())
      .subscribe({
        next: () => {
          expect(WrapperFunctionFirebase.signInWithPopup).toHaveBeenCalled();
          done();
        },
        error: done.fail,
      });
  });

  //!Sesión con correo
  it('Debe llamar el método de registro de usuario con email', (done: DoneFn) => {
    spyOn(
      WrapperFunctionFirebase,
      'createUserWithEmailAndPassword'
    ).and.returnValue(Promise.resolve({} as unknown as UserCredential));
    authService
      .register('test@test.fr', '123456')
      .pipe(first())
      .subscribe({
        next: () => {
          expect(
            WrapperFunctionFirebase.createUserWithEmailAndPassword
          ).toHaveBeenCalledWith(auth, 'test@test.fr', '123456');
          done();
        },
        error: done.fail,
      });
  });

  //!Sesión con correo
  it('Debe llamar el método de inicio de sesión con email', (done: DoneFn) => {
    spyOn(
      WrapperFunctionFirebase,
      'signInWithEmailAndPassword'
    ).and.returnValue(Promise.resolve({} as unknown as UserCredential));
    authService
      .login('test@test.fr', '123456')
      .pipe(first())
      .subscribe({
        next: () => {
          expect(
            WrapperFunctionFirebase.signInWithEmailAndPassword
          ).toHaveBeenCalledWith(auth, 'test@test.fr', '123456');
          done();
        },
        error: done.fail,
      });
  });

  //!Cierre de sesión
  it('Debe llamar el método de cierre de sesión', () => {
    spyOn(WrapperFunctionFirebase, 'signOut').and.returnValue(
      Promise.resolve()
    );
    authService.logout();
    expect(WrapperFunctionFirebase.signOut).toHaveBeenCalled();
  });
});
