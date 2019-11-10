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

  constructor(private searchService: ItuneSearchService) {
    this.searchService.getSongs(this.searchTerm$).subscribe((results) => {
      this.results = results.results;
      console.log(results);
    });
  }
}
