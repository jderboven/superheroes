import { storeSuperHeroes } from './core/state-management/heroes/actions';
import { HeroService } from './core/services/hero.service';
import { Injectable } from '@angular/core';
import { SuperHero } from './core/models/internal/superhero.internal';
import { tap, catchError } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import * as fromRoot from './core/state-management/reducers';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppSandbox {

  superHeroes$: Observable<Array<SuperHero>> = this.store.pipe(select(fromRoot.getAllSuperHeroes));

  constructor(private heroService: HeroService, private store: Store<fromRoot.AppState>) {}

  loadSuperHeroes(): Observable<SuperHero> {
    return this.heroService.getHeroById(Math.floor(Math.random() * 731) + 1).pipe(
      tap((heroes: SuperHero) =>  this.store.dispatch(storeSuperHeroes({ superHeroes : [heroes]}))),
      catchError((err: Error) => throwError(err))
    );
  }

  getSelectedHero(heroName: string): Observable<SuperHero> {
    return this.store.pipe(select(fromRoot.selectHero, { name: heroName }));
  }
}
