import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../index-core';
import { UsersService } from '../../services/users/Users.Service';

@Component({
  selector: 'app-header-private',
  templateUrl: './header-private.component.html',
  styleUrls: ['./header-private.component.css'],
})
export class HeaderPrivateComponent implements OnInit {
  user$ = this.usersService.currentUserProfile$;
  active!: boolean;
  profileActive: boolean = false;
  addBookActive: boolean = true;
  currentId: string;
  isAdmin: boolean = false;

  constructor(
    public router: Router,
    public usersService: UsersService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.currentId = JSON.parse(localStorage.getItem('userUid')!);
    if (
      this.currentId === this.authService.uidAdmin1 ||
      this.currentId === this.authService.uidAdmin2
    ) {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
    if (this.router.url === '/profile') {
      this.profileActive = !this.profileActive;
    }
    if (this.router.url === '/add-book') {
      this.addBookActive = !this.addBookActive;
    }
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }

  toggleMenu() {
    this.active = !this.active;
  }

  @HostListener('window:keyup.esc', ['$event'])
  handleEscape = ($event: KeyboardEvent) => {
    if ($event.key == 'Esc' || $event.key === 'Escape') {
      this.active = false;
    }
  };

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector(
      '.container__private-header'
    ) as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }
}
