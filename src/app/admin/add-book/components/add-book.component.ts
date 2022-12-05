import { BookService } from 'src/app/core/services/book/book.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/core/models/book.interface';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  bookForm: FormGroup;
  id: string | null;

  constructor(
    private readonly formBuilder: FormBuilder,
    private bookService: BookService,
    public readonly dialogRef: MatDialogRef<AddBookComponent>,
    @Inject(MAT_DIALOG_DATA) private readonly book: Book
  ) {}

  ngOnInit() {
    this.setForm();
  }

  setForm() {
    this.bookForm = this.formBuilder.group({
      name: [this.book.name, [Validators.required]],
      author: [this.book.author, [Validators.required]],
      category: [this.book.category, [Validators.required]],
      description: [this.book.description, [Validators.required]],
      imgUrl: [this.book.imgUrl, [Validators.required]],
    });
  }

  saveBook() {
    this.dialogRef.close({ ...this.book, ...this.bookForm.value });
  }
}
