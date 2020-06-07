import { SuperHeroAppearanceResponse } from './superhero-appearance.response';
import { SuperHeroBioResponse } from './superhero-biography.response';
import { SuperHeroPowerStatResponse } from './superhero-powerstat.response';

export interface SuperHeroResponse {
  name: string;
  powerstats: SuperHeroPowerStatResponse;
  biography: SuperHeroBioResponse;
  appearance: SuperHeroAppearanceResponse;
  averagePower: number;
  work: {
    occupation: string;
    base: string;
  };
  connections: {
    'group-affiliation': string
    relatives: string
  };
  image: {
    url: string
  };
}
