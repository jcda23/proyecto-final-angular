import { Component, NgZone, OnInit } from '@angular/core';
import { authState } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-public-home',
  templateUrl: './public-home.component.html',
  styleUrls: ['./public-home.component.css'],
})
export class PublicHomeComponent implements OnInit {
  constructor(
    public authService: AuthService,
    private router: Router,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    authState(this.authService.auth).subscribe((user) => {
      if (user) {
        this.ngZone.run(() => {
          this.authService.toast.success(`Bienvenido: ${user.email}`);
          this.router.navigate(['/home']);
        });
      }
    });
  }
}
