import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DetailedViewComponent } from './detailed-view/detailed-view.component';
import { CharacterComponent } from './character/character.component';
import { CharacterImageComponent } from './character-image/character-image.component';
import{ HttpClientModule} from '@angular/common/http';
import { LoadingComponent } from './loading/loading.component';
import { ErrorComponent } from './error/error.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DetailedViewComponent,
    CharacterComponent,
    CharacterImageComponent,
    LoadingComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
