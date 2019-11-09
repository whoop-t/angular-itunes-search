import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-itunes-search';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    let obs = this.http.get(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
    );
    obs.subscribe((response) => console.log(response));
  }
}
