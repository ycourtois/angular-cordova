import { Component, OnInit, Input } from '@angular/core';
import { Feed } from '../model/feed';
import { FeedEntry } from '../model/feed-entry';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css']
})
export class FeedCardComponent implements OnInit {

  @Input() feedEntry: FeedEntry;

  constructor() { }

  ngOnInit() {
  }

}
