import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { filter, Observable, Subject, takeUntil, tap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Book } from 'src/app/core/models/book.interface';
import { BookService } from 'src/app/core/services/book/book.service';
import { AddBookComponent } from '../../add-book/components/add-book.component';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css'],
})
export class ListBookComponent implements OnInit {
  show: boolean = false;
  books: Book[];
  selectedBook: Book;
  destroyed$ = new Subject<void>();

  constructor(
    public bookService: BookService,
    private readonly dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.bookService.getAll().subscribe((book) => {
      this.books = book;
    });
  }

  updateBook(book: Book) {
    console.log(book);
    const dialogRef = this.dialog.open(AddBookComponent, {
      data: { ...book },
      width: 'auto',
      panelClass: 'custom-modalbox',
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter(Boolean),
        tap((book) => this.bookService.update(book)),
        takeUntil(this.destroyed$)
      )
      .subscribe();
  }

  detailBook() {
    this.show = true;
  }

  /*   getBook(book: Book) {
    this.bookService.get(book.id).subscribe((book) => {
      localStorage.setItem('book', JSON.stringify(book));
    });
  } */

  async deleteBook(book: Book) {
    const response = await this.bookService.delete(book.id);
    console.log(response);
  }
}
