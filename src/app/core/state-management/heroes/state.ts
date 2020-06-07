import { SuperHero } from './../../models/internal/superhero.internal';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { stubArray } from 'lodash';

export interface SuperHeroesState extends EntityState<SuperHero> {
  superHeroes: Array<SuperHero>;
}

export const superHeroesAdapter: EntityAdapter<SuperHero> = createEntityAdapter<SuperHero>({
  selectId: (superHero: SuperHero) => superHero.name,
});

export const superHeroesInitialState: SuperHeroesState = superHeroesAdapter.getInitialState({
  superHeroes: stubArray(),
});
