import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
    public bookForm: FormGroup;
    public isEditable: boolean;
    public books$: Observable<Book[]>;
    private data: any;

    constructor(
        private bookService: BookService,
    ) { }

    ngOnInit() {
        this.books$ = this.bookService.getBooks();
    }

    public editBook(i: number) {
        this.isEditable = true;
    }

    public deleteBook(i: number) {
        this.bookService.deleteBook(i);
    }

}
