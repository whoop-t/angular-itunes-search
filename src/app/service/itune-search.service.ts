import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  debounceTime,
  switchMap,
  map,
  distinctUntilChanged
} from 'rxjs/operators';

@Injectable()
export class ItuneSearchService {
  //Base URL for Itunes API
  itunesUrl: string =
    'https://cors-anywhere.herokuapp.com/https://itunes.apple.com/';
  //Search parameters
  queryUrl: string = 'search?term=';
  //Limit parameters
  limit: string = '&limit=3';
  constructor(private http: HttpClient) {}

  //Automatically searchs based on whats typed in
  getSongs(terms: Observable<string>) {
    return terms.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((term) => this.searchEntries(term))
    );
  }

  //Uses user entered text to query Itunes API
  searchEntries(term) {
    return this.http
      .get(`${this.itunesUrl}${this.queryUrl}${term}&media=music${this.limit}`)
      .pipe(map((res) => res));
  }
}
