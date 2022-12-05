import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  CollectionReference,
  deleteDoc,
  doc,
  docData,
  DocumentData,
  Firestore,
  updateDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Book } from '../../models/book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private bookCollection: CollectionReference<DocumentData>;

  constructor(private readonly firestore: Firestore) {
    this.bookCollection = collection(this.firestore, 'book');
  }

  getAll(): Observable<Book[]> {
    const bookRef = collection(this.firestore, 'book');
    return collectionData(bookRef, { idField: 'id' }) as Observable<Book[]>;
  }

  get(id: string) {
    const bookDocumentReference = doc(this.firestore, `book/${id}`);
    return docData(bookDocumentReference, { idField: 'id' });
  }

  create(book: Book) {
    return addDoc(this.bookCollection, book);
  }

  update(book: Book) {
    const bookDocumentReference = doc(this.firestore, `book/${book.id}`);
    return updateDoc(bookDocumentReference, { ...book });
  }

  delete(id: string) {
    const bookDocumentReference = doc(this.firestore, `book/${id}`);
    return deleteDoc(bookDocumentReference);
  }
}
