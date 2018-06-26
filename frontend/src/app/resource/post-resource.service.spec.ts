import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PostResourceService } from './post-resource.service';

describe('PostResourceService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                PostResourceService
            ],
            imports: [
                HttpClientTestingModule
            ]
        });
    });

    it('should be created', inject([PostResourceService], (service: PostResourceService) => {
        expect(service).toBeTruthy();
    }));

});
