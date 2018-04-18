import { Component, OnInit } from '@angular/core';
import { FeedServiceService } from './feed-service.service';
import { FeedEntry } from './model/feed-entry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private feedUrl = 'https%3A%2F%2Fwww.becompany.ch%2Fen%2Fblog%2Ffeed.xml';
  feedEntries: Array<FeedEntry> = [];
  // feeds: FeedEntry[];

  constructor (
    private feedService: FeedServiceService
  ) {}

  ngOnInit() {
    this.refreshFeed();
  }
  refreshFeed() {
    this.feedService.getFeedContent(this.feedUrl)
        .subscribe(
            feed => this.feedEntries = feed.items,
            error => console.log(error));
  }

}
