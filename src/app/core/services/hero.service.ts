import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, map, pluck } from 'rxjs/operators';
import { SuperHeroResponse } from '../models/response/superhero.response';
import { SuperHero } from '../models/internal/superhero.internal';
import { sum, isEqual, divide } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class HeroService {


  constructor(private http: HttpClient) { }

  /**
   * Performs a back-end call to find information about the superhero via its id.
   * @param id the id of the super hero we are searching for
   */
  getHeroById(id: number): Observable<SuperHero> {
    return this.http.get<SuperHeroResponse>(`/${id}`).pipe(
      map((heroResponse: SuperHeroResponse) => ({
        name: heroResponse.name,
        powerstats: heroResponse.powerstats,
        image: heroResponse.image,
      })),
      catchError((err: Error) => throwError(err))
    );
  }
}
