import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";

import { Hero } from './hero';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class HeroService {

    result: any;
    constructor(private messageService: MessageService, private _http: Http) { }

    getHeroes(): Observable<Hero[]> {
        this.messageService.add('HeroService: fetched heroes');
        return this._http.get("/api/heroes")
            .pipe(map(result => this.result = result.json().data));
    }

    getHero(id: string): Observable<Hero> {
        this.messageService.add(`HeroService: fetched hero id=${id}`);
        return this._http.get(`/api/heroes/${id}`)
            .pipe(map(result => this.result = result.json().data));
    }
}
