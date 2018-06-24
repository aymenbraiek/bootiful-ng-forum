import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Post } from '../model/post';
import { Deserialize } from 'cerialize';

@Injectable({
    providedIn: 'root'
})
export class PostResourceService {

    public constructor(private httpClient: HttpClient) {

    }

    public findAll(): Observable<Array<Post>> {
        return this.httpClient.get('/api/posts').pipe(
            map<Object, Array<Post>>((jsonObject: Object) => Deserialize(jsonObject, Post))
        );
    }

}
