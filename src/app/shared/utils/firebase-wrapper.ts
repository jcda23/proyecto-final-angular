import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  authState,
} from '@angular/fire/auth';
export abstract class WrapperFunctionFirebase {
  static readonly authState = authState;
  static readonly signInWithEmailAndPassword = signInWithEmailAndPassword;
  static readonly signInWithPopup = signInWithPopup;
  static readonly signOut = signOut;
  static readonly createUserWithEmailAndPassword =
    createUserWithEmailAndPassword;
}
