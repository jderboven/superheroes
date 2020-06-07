import { SuperHeroResponse } from './../response/superhero.response';

export type SuperHero = Pick<SuperHeroResponse, 'name' | 'powerstats' | 'image'>;
