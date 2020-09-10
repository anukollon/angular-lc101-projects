import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinkTitle = "Favorite Links";
  favLinks = ["https://www.flickr.com/","https://www.nytimes.com/"]
  constructor() { }

  ngOnInit() {
  }

}
