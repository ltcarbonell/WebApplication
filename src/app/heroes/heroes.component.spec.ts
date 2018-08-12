import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
    let component: HeroesComponent;
    let fixture: ComponentFixture<HeroesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterModule, HttpModule],
            declarations: [HeroesComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeroesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
