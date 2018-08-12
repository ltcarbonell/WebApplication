import { TestBed, inject } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { HeroService } from './hero.service';

describe('HeroService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterModule, HttpModule],
            providers: [HeroService]
        });
    });

    it('should be created', inject([HeroService], (service: HeroService) => {
        expect(service).toBeTruthy();
    }));
});
