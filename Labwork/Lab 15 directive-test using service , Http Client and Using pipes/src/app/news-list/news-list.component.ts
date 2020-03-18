import { Component, OnInit } from '@angular/core';
import { NewService, News } from './news.service';


@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  searchText: string;

  selectedNewsId: number;

  newsItems: News[] = [];

  expandNews(id: number) {
    this.selectedNewsId = id;
    return false;
  }

  constructor(private newsSvc: NewService) { }

  ngOnInit(): void {
    this.newsSvc.getNewsItems().subscribe(response => {
      this.newsItems = response;
    })
  }

}
