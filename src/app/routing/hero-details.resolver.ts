import { AppSandbox } from './../app.sandbox';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SuperHero } from '../core/models/internal/superhero.internal';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HeroDetailsResolver implements Resolve<Observable<SuperHero>> {

  constructor(private sandbox: AppSandbox) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SuperHero> {
    return this.sandbox.getSelectedHero(route.paramMap.get('name')).pipe(take(1));
  }
}
