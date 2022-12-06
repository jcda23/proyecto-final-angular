import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NonNullableFormBuilder } from '@angular/forms';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { ProfileUser } from 'src/app/core/models/user.interface';

import { HotToastService } from '@ngneat/hot-toast';
import { UsersService } from 'src/app/core/services/users/Users.Service';

@UntilDestroy()
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user$ = this.usersService.currentUserProfile$;
  styleImage = 'book';
  loading: boolean = false;
  destroyed$ = new Subject<void>();

  profileForm = this.fb.group({
    uid: [''],
    displayName: [''],
    firstName: [''],
    lastName: [''],
    phone: [''],
    address: [''],
    admin: false,
    editor: false,
  });

  constructor(
    private toast: HotToastService,
    private usersService: UsersService,
    private fb: NonNullableFormBuilder
  ) {}

  ngOnInit(): void {
    this.usersService.currentUserProfile$
      .pipe(untilDestroyed(this), tap())
      .subscribe((user) => {
        this.profileForm.patchValue({ ...user });
      });

    this.load();
  }

  uploadFile(event: any, { uid }: ProfileUser) {
    this.usersService
      .uploadImage(event.target.files[0], `images/profile/${uid}/profile.webp`)
      .pipe(
        this.toast.observe({
          loading: 'Cargando imagen de perfil...',
          success: 'Imagen cargada correctamente',
          error: 'Ocurrio un error al cargar la imagen',
        }),
        switchMap((photoURL) =>
          this.usersService.updateUser({
            uid,
            photoURL,
          })
        ),
        takeUntil(this.destroyed$)
      )
      .subscribe();
  }

  saveProfile() {
    const { uid, ...data } = this.profileForm.value;

    if (!uid) {
      return;
    }

    this.usersService
      .updateUser({ uid, ...data })
      .pipe(
        this.toast.observe({
          loading: 'Guardando datos del...',
          success: 'Perfil actualizado correctamente',
          error: 'Ocurrio un error al actualizar el perfil',
        }),
        takeUntil(this.destroyed$)
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }

  load() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 800);
  }
}
