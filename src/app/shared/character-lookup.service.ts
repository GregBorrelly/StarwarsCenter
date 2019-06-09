import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {forkJoin} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterLookupService {

  constructor(private http: HttpClient) {}

  fetchDetails(url) {
    return this.http.get(url)
  }

  fetchMovieDetails(movieUrls) {
    return forkJoin( movieUrls.map( url => this.http.get(url)))
  }
}
