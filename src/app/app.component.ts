import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  view = "card"
  loading = false
  characterDetails = {
    "name": "Luke Skywalker", 
    "height": "172", 
    "mass": "77", 
    "hair_color": "blond", 
    "skin_color": "fair", 
    "eye_color": "blue", 
    "birth_year": "19BBY", 
    "gender": "male", 
    "homeworld": "https://swapi.co/api/planets/1/", 
    "films": [
        "https://swapi.co/api/films/2/", 
        "https://swapi.co/api/films/6/", 
        "https://swapi.co/api/films/3/", 
        "https://swapi.co/api/films/1/", 
        "https://swapi.co/api/films/7/"
    ], 
    "species": [
        "https://swapi.co/api/species/1/"
    ], 
    "vehicles": [
        "https://swapi.co/api/vehicles/14/", 
        "https://swapi.co/api/vehicles/30/"
    ], 
    "starships": [
        "https://swapi.co/api/starships/12/", 
        "https://swapi.co/api/starships/22/"
    ], 
    "created": "2014-12-09T13:50:51.644000Z", 
    "edited": "2014-12-20T21:17:56.891000Z", 
    "url": "https://swapi.co/api/people/1/"
}

  selectedCharacterImage = ''

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
  onCharacterSelect(character){
    this.selectedCharacterImage = character.image
    this.view = "detail"
  }

  onBackButtonPressed(){
    this.view = 'card'
  }
}
