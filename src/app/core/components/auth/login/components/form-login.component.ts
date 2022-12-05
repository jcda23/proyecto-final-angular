import { Component, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
  providers: [AuthService],
})
export class FormLoginComponent implements OnInit {
  hide = true;
  loginForm: FormGroup = new FormGroup({});
  loading: boolean = false;
  destroyed$ = new Subject<void>();

  constructor(
    public authService: AuthService,
    private fb: NonNullableFormBuilder,
    private toast: HotToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    const { email, password } = this.loginForm.value;

    if (!this.loginForm.valid || !email || !password) {
      return;
    }

    this.authService
      .login(email, password)
      .pipe(
        this.toast.observe({
          success: 'Inicio de sesión correcto',
          loading: 'Entrando...',
          error: ({ message }) => `Ha ocurrido un error: ${message} `,
        }),
        takeUntil(this.destroyed$)
      )
      .subscribe(() => {
        this.loading = true;
        this.router.navigate(['/home']);
      });
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }
}
