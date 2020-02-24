import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, tap, retryWhen, delay, scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  bookCache: {[isbn: string]: Book} = { };
  booksCache: Book[] = [];

  constructor(private http: HttpClient) { }


  // check this getBooks in different way
  getBooks(): Observable<Book[]> {
    const cachedBooks = this.booksCache;

    if (cachedBooks && cachedBooks.length > 0 ) {
      console.log('Got full books data hit into cache');
      console.log(cachedBooks);
      return of(cachedBooks);
    }
    return this.http.get<Book[]>('/books').pipe(
      tap(books => {
        this.booksCache = books;
        console.log(this.booksCache);
      }),
      catchError(err => cachedBooks ? of(cachedBooks) : throwError(err))
    );
  }

  getBook(isbn: string): Observable<Book> {
    const cachedBook = this.bookCache[isbn];

    if (cachedBook !== undefined) {
      console.log('Got a cache hit');
      return of(cachedBook);
    }
    return this.http.get<Book>(`/books/${isbn}`).pipe(
      tap(book => this.bookCache[isbn] = book), // populate cache
      catchError(err => cachedBook ? of(cachedBook) : throwError(err))
    );
  }

  deleteBook(isbn: string): Observable<any> {
    return this.http.delete(`/books/laakakakkakalalalk/${isbn}`).pipe(
      tap(_ => delete this.bookCache[isbn]),
      catchError((err: HttpErrorResponse) => {
        if (err.status === 0) {
          return throwError('Oops! Please check your network connection and try again.');
        } else {
          return throwError('Sorry there was a problem at the server.');
        }
      })
    );
  }

  saveBook(book: Book): Observable<any> {
    return this.http.put(`/books/${book.isbn}`, book);
  }
}

export class Book {
  isbn: string;
  title: string;
  price: number;
}
