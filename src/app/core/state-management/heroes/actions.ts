import { createAction, props } from '@ngrx/store';

import { SuperHero } from '../../models/internal/superhero.internal';

export const storeSuperHeroes = createAction('[Heroes] Store all the heroes', props<{ superHeroes: Array<SuperHero> }>());
