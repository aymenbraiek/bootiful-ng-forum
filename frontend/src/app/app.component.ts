import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Deserialize } from 'cerialize';
import { Post } from './model/post';

@Component({
    selector: 'ngf-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    public posts: Array<Post>;

    constructor(http: HttpClient) {
        http.get('/api/posts').subscribe((data: Object) => {
            this.posts = Deserialize(data, Post);
        });
    }

}
