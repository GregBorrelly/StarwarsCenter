import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'starwars-star-center';
  characters = [
      {
        "name": "Luke Skywalker",
        "image": "https://starwarsblog.starwars.com/wp-content/uploads/2017/11/Untitled-2.jpg",
        "url": "https://swapi.co/api/people/1/"
      },
      {
        "name": "Obi-wan Kenobi",
        "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1497999786i/23078368.png",
        "url": "https://swapi.co/api/people/unknown/"
      }, 
      {
        "name": "Darth Vader",
        "image": "https://pixel.nymag.com/imgs/daily/vulture/2016/08/19/19-darth-vader.w710.h473.2x.jpg",
        "url": "https://swapi.co/api/people/4/"
      },
      {
        "name": "R2-D2",
        "image": "https://comicnewbies.files.wordpress.com/2018/02/r2-d2-is-returned-to-the-skywalker-family-2-e1519542804258.jpg",
        "url": "https://swapi.co/api/people/3/"
      }
    
  ]
}
