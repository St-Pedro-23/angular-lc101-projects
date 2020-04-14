import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Some of My Favorite Pics';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://vignette.wikia.nocookie.net/robotech/images/2/27/SKull_one_in_action.png/revision/latest/scale-to-width-down/340?cb=20150831160402';
  image3 = 'https://wh40k.lexicanum.com/mediawiki/images/thumb/7/72/SangTerra.jpg/370px-SangTerra.jpg';

  constructor() { }

  ngOnInit() {
  }

}