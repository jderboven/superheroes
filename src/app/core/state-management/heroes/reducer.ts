import { superHeroesInitialState, superHeroesAdapter, SuperHeroesState } from './state';
import { Action, createReducer, on } from '@ngrx/store';

import * as actions from './actions';

const reducer = createReducer(
  superHeroesInitialState,
  on(actions.storeSuperHeroes, (state: SuperHeroesState, { superHeroes }) =>
    superHeroesAdapter.addMany(superHeroes, state),
  ),
);

export function superHeroesReducer(state: SuperHeroesState, action: Action): SuperHeroesState {
  return reducer(state, action);
}
