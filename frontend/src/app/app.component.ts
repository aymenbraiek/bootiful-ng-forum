import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public posts: any;

  constructor(http: HttpClient) {
    http.get('/api/post').subscribe(data => {
      this.posts = data;
    });
  }

}
