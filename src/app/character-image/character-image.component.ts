import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-character-image',
  templateUrl: './character-image.component.html',
  styleUrls: ['./character-image.component.css']
})
export class CharacterImageComponent implements OnInit {
  @Input() character: {
    name: string,
    image: string,
    url: string
  }
  constructor() { }

  ngOnInit() {
  }

}
