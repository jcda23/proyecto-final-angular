import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  NonNullableFormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Subject, switchMap, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UsersService } from 'src/app/core/services/users/Users.Service';

export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordsDontMatch: true };
    } else {
      return null;
    }
  };
}

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css'],
  providers: [AuthService],
})
export class FormRegisterComponent implements OnInit {
  hide = true;
  loading: boolean = false;
  destroyed$ = new Subject<void>();

  registerForm = this.fb.group(
    {
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    },
    { validators: passwordsMatchValidator() }
  );

  constructor(
    public authService: AuthService,
    private fb: NonNullableFormBuilder,
    private router: Router,
    private toast: HotToastService,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {}

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  get name() {
    return this.registerForm.get('name');
  }

  onSubmit() {
    const { name, email, password } = this.registerForm.value;

    if (!this.registerForm.valid || !name || !password || !email) {
      return;
    }

    this.authService
      .register(email, password)
      .pipe(
        switchMap(({ user: { uid } }) =>
          this.usersService.addUser({ uid, email, displayName: name })
        ),
        this.toast.observe({
          success: 'Felicitaciones! registro exitoso',
          loading: 'Iniciando sesión...',
          error: ({ message }) => `${message}`,
        }),
        takeUntil(this.destroyed$)
      )
      .subscribe(() => {
        this.loading = true;
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 500);
      });
  }
  ngOnDestroy() {
    this.destroyed$.next();
  }
}
