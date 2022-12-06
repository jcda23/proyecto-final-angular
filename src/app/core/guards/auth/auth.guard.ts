import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { map, Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(public authService: AuthService, public router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.getStatus().pipe(
      map((status) => {
        if (status) {
          return true;
        } else {
          this.authService.toast.info('Debes iniciar sesión o registrarte');
          this.router.navigate(['/logout']);
          return false;
        }
      })
    );
  }
}
