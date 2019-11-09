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
      'https://itunes.apple.com/search?term=jack+johnson&limit=3'
    );
    obs.subscribe((response) => console.log(response));
  }
}
