import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.router';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './components/form.component/form.component';
import { BookListComponent } from './components/book-list.component/book-list.component';
import { BookService } from './services/book.service';
import { HttpModule } from '@angular/http';
import { AppStore } from './app.store';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
  ],
  providers: [AppStore, BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
