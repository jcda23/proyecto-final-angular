import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-public',
  templateUrl: './header-public.component.html',
  styleUrls: ['./header-public.component.css'],
})
export class HeaderPublicComponent implements OnInit {
  isLogin = false;
  activeUrl: boolean;

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.router.url === '/login' || this.router.url === '/register') {
      this.activeUrl = true;
    } else if (this.router.url === '/logout') {
      this.activeUrl = false;
    }
  }
}
