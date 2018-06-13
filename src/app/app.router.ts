import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list.component/book-list.component';
import { FormComponent } from './components/form.component/form.component';



@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: 'form',
                pathMatch: 'full'
            },
            {
                path: 'form',
                component: FormComponent,
            },
            {
                path: 'books',
                component: BookListComponent,
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
