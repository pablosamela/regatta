import { createAction, props } from '@ngrx/store';
import { IContinent } from '@shared/regatta';

export const initContinent = createAction('[Continent Page] Init');

export const loadContinentSuccess = createAction(
  '[Continent/API] Load Continent Success',
  props<{ continents: IContinent[] }>()
);

export const loadContinentFailure = createAction(
  '[Continent/API] Load Continent Failure',
  props<{ error: any }>()
);
