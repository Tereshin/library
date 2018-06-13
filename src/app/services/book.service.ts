import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book.model';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { AppStore } from '../app.store';

@Injectable()
export class BookService {

    constructor(
        private http: HttpClient,
        private store: AppStore
    ) { }

    public getBooks() {
        return this.store.getBooks();
    }

    public addBook(book: Book) {
        return this.store.addBook(book);
    }

    public editBook(book: Book) {
        this.store.editBook(book);
    }

    public deleteBook(i: number) {
        this.store.deleteBook(i);
    }

}
