import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppStore } from './app.store';
import { Observable } from 'rxjs/Observable';
import { Book } from './models/book.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public books$: Observable<Book[]>;

    constructor(
        private store: AppStore,
    ) {
        this.books$ = this.store.getBooks();
    }

    ngOnInit() {
    }

}
