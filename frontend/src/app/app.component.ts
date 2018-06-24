import { Component } from '@angular/core';

import { Post } from './model/post';
import { PostResourceService } from './resource/post-resource.service';

@Component({
    selector: 'ngf-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    public posts: Array<Post>;

    constructor(postResourceService: PostResourceService) {
        postResourceService.findAll().subscribe((posts: Array<Post>) => {
            this.posts = posts;
        });
    }

}
