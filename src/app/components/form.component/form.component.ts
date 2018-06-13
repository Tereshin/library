import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppStore } from '../../app.store';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';
import { Alert } from '../../models/alert.model';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    public bookForm: FormGroup;
    public alerts: Alert[];

    constructor(
        private fb: FormBuilder,
        private store: AppStore,
        private bookService: BookService,
        private router: Router
    ) {
        this.alerts = [];
    }

    ngOnInit() {
        this.createForm();
    }

    public onSubmit() {
        console.log(this.bookForm.value);
        this.alerts.push({ id: 1, type: 'success', message: 'Book was successfully added.' });
        this.bookService.addBook(this.bookForm.value);
        this.router.navigate(['../books']);
    }

    public closeAlert(alert: Alert) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

    private createForm() {
        this.bookForm = this.fb.group({
            title: ['', Validators.required],
            author: ['', Validators.required],
            publishedAt: ['', Validators.required],
            addedAt: ['', Validators.required],
            review: [''],
        });
    }

}
