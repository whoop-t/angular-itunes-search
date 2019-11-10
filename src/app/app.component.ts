import { Component } from '@angular/core';
import { ItuneSearchService } from './service/itune-search.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ItuneSearchService]
})
export class AppComponent {
  title = 'angular-itunes-search';
  results: any;
  searchTerm$ = new Subject<string>();
  value: any;

  constructor(private searchService: ItuneSearchService) {
    //Pulls results, converts to array, stores in results: any
    this.searchService.getSongs(this.searchTerm$).subscribe((results) => {
      this.results = Object.values(results)[1];
    });
  }
}
