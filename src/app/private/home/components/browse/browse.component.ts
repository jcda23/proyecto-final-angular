import { BookService } from 'src/app/core/services/book/book.service';
import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/core/models/book.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css'],
})
export class BrowseComponent implements OnInit {
  styleImage = 'rain';
  loading: boolean = false;

  constructor(private bookService: BookService) {}

  books: Book[];
  ngOnInit() {
    this.bookService.getAll().subscribe((book) => {
      this.books = book;
    });
    this.load();
  }

  load() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}
