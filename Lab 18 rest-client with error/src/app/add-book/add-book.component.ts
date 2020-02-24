import { Component, OnInit } from '@angular/core';
import { DataService, Book } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private datService: DataService, private router: Router) { }

  book: Book = new Book();

  addBook(){
    this.datService.saveBook(this.book).subscribe(_ => {
      this.router.navigate(['/']);
    })
  }
  ngOnInit(): void {
  }

}
