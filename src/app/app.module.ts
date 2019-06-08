import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DetailedViewComponent } from './detailed-view/detailed-view.component';
import { CharacterComponent } from './character/character.component';
import { CharacterImageComponent } from './character-image/character-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DetailedViewComponent,
    CharacterComponent,
    CharacterImageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
