import { Component, Injectable, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/services/auth/auth.service';
import { WrapperFunctionFirebase } from 'src/app/shared/utils/firebase-wrapper';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-hero-image',
  templateUrl: './hero-image.component.html',
  styleUrls: ['./hero-image.component.css'],
})
export class HeroImageComponent implements OnInit {
  logout: any;
  constructor(private auth: Auth, private router: Router) {}

  ngOnInit(): void {}
}
