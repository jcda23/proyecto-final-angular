import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Component, NgZone, OnInit } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    public authService: AuthService,
    private router: Router,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    authState(this.authService.auth).subscribe((user) => {
      if (user) {
        this.ngZone.run(() => {
          this.authService.toast.warning(
            'Debes cerrar la sesión para acceder a esta sección'
          );
          this.router.navigate(['/home']);
        });
      }
    });
  }
}
