import { superHeroesAdapter } from './heroes/state';
import { SuperHero } from './../models/internal/superhero.internal';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { isEqual } from 'lodash';
import * as fromAllSuperHeroes from './heroes';

export interface AppState {
  superHeroes: fromAllSuperHeroes.SuperHeroesState;
}

const stateMap = {
  superHeroes: fromAllSuperHeroes.superHeroesReducer,
};

export const superHeroesReducers: ActionReducerMap<AppState> = stateMap;

export const getFeatureState = (state: AppState) => state.superHeroes;

export const getAllSuperHeroes = createSelector<
  AppState,
  fromAllSuperHeroes.SuperHeroesState,
  Array<SuperHero>
>(getFeatureState, superHeroesAdapter.getSelectors().selectAll);

export const selectHero = createSelector(
  getAllSuperHeroes,
  (heroes: Array<SuperHero>, props: {name: string}) => heroes.find((hero: SuperHero) => isEqual(hero.name, props.name))
);
