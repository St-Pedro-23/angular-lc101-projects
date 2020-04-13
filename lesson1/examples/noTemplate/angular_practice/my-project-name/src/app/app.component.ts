import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  name: string = 'Pedro Daniel Rios Jones';
  itemList: string[] = ['Pencil', 'Dice', 'Character Sheet', 'Character Mini'];

  rectangle = {
    length: 5,
    width: 6,
    area: function() {
       return this.length * this.width;
    }
 }
}

