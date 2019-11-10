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
  itunesUrl: string =
    'https://cors-anywhere.herokuapp.com/https://itunes.apple.com/';
  queryUrl: string = 'search?term=';
  limit: string = '&limit=3';
  constructor(private http: HttpClient) {}

  getSongs(terms: Observable<string>) {
    return terms.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((term) => this.searchEntries(term))
    );
  }
  searchEntries(term) {
    return this.http
      .get(`${this.itunesUrl}${this.queryUrl}${term}&media=music${this.limit}`)
      .pipe(map((res) => res));
  }
}
