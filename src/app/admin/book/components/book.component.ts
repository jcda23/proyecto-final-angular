import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter, Subject, takeUntil, tap } from 'rxjs';
import { BookService } from 'src/app/core/services/book/book.service';
import { AddBookComponent } from '../../add-book/components/add-book.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  destroyed$ = new Subject<void>();
  loading: boolean = false;

  constructor(
    private readonly bookService: BookService,
    private readonly dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.load();
  }

  addBook() {
    const dialogRef = this.dialog.open(AddBookComponent, {
      data: {},
      width: 'auto',
      panelClass: 'custom-modalbox',
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter(Boolean),
        tap((book) => this.bookService.create(book)),
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
    }, 2000);
  }
}
