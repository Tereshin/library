import { Injectable } from '@angular/core';
import { Book } from './models/book.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AppStore {
    public books: Observable<Book[]>;
    private _books: BehaviorSubject<Book[]>;
    private bookStore: Book[];

    constructor() {
        this._books = <BehaviorSubject<Book[]>>new BehaviorSubject([]);
        this.books = this._books.asObservable();
        this.bookStore = [
            {
                id: 0,
                title: 'Book0',
                author: 'Author0',
                publishedAt: { year: 2018, month: 6, day: 19 },
                addedAt: { year: 2018, month: 5, day: 18 },
                review: 'Review0'
            }, {
                id: 1,
                title: 'Book1',
                author: 'Author1',
                publishedAt: { year: 2018, month: 6, day: 19 },
                addedAt: { year: 2018, month: 5, day: 18 },
                review: 'Review1'
            }, {
                id: 2,
                title: 'Book2',
                author: 'Author2',
                publishedAt: { year: 2018, month: 6, day: 19 },
                addedAt: { year: 2018, month: 5, day: 18 },
                review: 'Review2'
            }, {
                id: 3,
                title: 'Book3',
                author: 'Author3',
                publishedAt: { year: 2018, month: 6, day: 19 },
                addedAt: { year: 2018, month: 5, day: 18 },
                review: 'Review3'
            }, {
                id: 4,
                title: 'Book4',
                author: 'Author4',
                publishedAt: { year: 2018, month: 6, day: 19 },
                addedAt: { year: 2018, month: 5, day: 18 },
                review: 'Review4'
            }
        ];
        this.updateStore();
    }


    public getBooks() {
        return this.books;
    }

    public addBook(book: Book) {
        this.bookStore.push({ id: this.bookStore.length, ...book });
        this.updateStore();
    }

    public editBook(book: Book) {
        const index = this.bookStore.findIndex(data => data.id === book.id);
        this.bookStore[index] = book;
        this.updateStore();
    }

    public deleteBook(id: number) {
        this.bookStore = this.bookStore.filter(book => book.id !== id);
        this.updateStore();
    }

    private updateStore() {
        this._books.next(this.bookStore);
    }

}
