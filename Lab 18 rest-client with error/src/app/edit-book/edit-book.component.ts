import { Component, OnInit } from '@angular/core';
import { DataService, Book } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  constructor(private dataService: DataService,
              private activateRoute: ActivatedRoute,
              private router: Router) { }

  book: Book;
  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      let isbn = params.isbn;

      this.dataService.getBook(isbn).subscribe(book => {
        this.book = book;
      });
    });
  }

  updateBoook(){
    this.dataService.saveBook(this.book).subscribe(_ => {
      this.router.navigate(['/']);
    });
  }

}
