import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterLookupService {

  constructor(private http: HttpClient) {}

  fetchDetails(url) {
    return this.http.get(url)
  }
}
