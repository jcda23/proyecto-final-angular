import { DocumentData } from '@angular/fire/firestore';
import { ProfileUser } from 'src/app/core/models/user.interface';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
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
  isLogin = this.authService.authenticated;
  active!: boolean;
  profileActive: boolean = false;
  addBookActive: boolean = true;
  currentId: string;
  currentUser: DocumentData;

  constructor(
    public router: Router,
    public usersService: UsersService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.currentId = JSON.parse(localStorage.getItem('userUid')!);
    this.usersService.getUser(this.currentId).subscribe((data) => {
      this.currentUser = data;
      console.log(this.currentUser['admin']);
    });

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
