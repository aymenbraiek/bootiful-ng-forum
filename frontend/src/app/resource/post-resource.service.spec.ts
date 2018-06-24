import { TestBed, inject } from '@angular/core/testing';

import { PostResourceService } from './post-resource.service';

describe('PostResourceService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PostResourceService]
        });
    });

    it('should be created', inject([PostResourceService], (service: PostResourceService) => {
        expect(service).toBeTruthy();
    }));

});
