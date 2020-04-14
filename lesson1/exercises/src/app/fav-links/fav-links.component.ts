import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks: string[] = ['https://www.d20pfsrd.com/', 'https://en.wikipedia.org/wiki/Crown_of_sonnets', 'https://wh40k.lexicanum.com/wiki/Main_Page', 'https://www.cmgww.com/historic/wilde/', 'https://www.cs.cmu.edu/~tilt/principia/'];

  constructor() { }

  ngOnInit() {
  }

}
