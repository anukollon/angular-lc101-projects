import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Random Images';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://cdn.pixabay.com/photo/2020/05/09/05/30/hirsch-5148320_960_720.jpg';
  image3 = 'https://cdn.pixabay.com/photo/2020/09/04/16/18/mountains-5544365_1280.jpg';

  constructor() { }

  ngOnInit() {
  }

}