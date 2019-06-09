import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {CharacterLookupService} from '../shared/character-lookup.service'
@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.css']
})
export class DetailedViewComponent implements OnInit {
  films = []
  @Output() backButtonPressed = new EventEmitter()

  @Input() character: {
    name: string, 
    height: number, 
    mass: number, 
    hair_color: string, 
    skin_color: string, 
    eye_color: string, 
    birth_year: string, 
    gender: string, 
    homeworld: string, 
    films: Array<string>
    species: Array<string> , 
    vehicles: Array<string>, 
    starships: Array<string>, 
    created: string, 
    edited: string, 
    url: string
  }

  @Input() selectedCharacterImage : string

  constructor(private CharacterLookupService: CharacterLookupService) { }

  ngOnInit() {
      this.CharacterLookupService.fetchMovieDetails(this.character.films).subscribe( res => {
        this.films = res
        debugger
      })
    
  }

  switchView(){
    this.backButtonPressed.emit()
  }

}
