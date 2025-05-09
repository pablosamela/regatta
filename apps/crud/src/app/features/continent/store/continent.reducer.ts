import { createReducer, on, Action } from '@ngrx/store';

import { IContinent } from '@shared/regatta';
import * as ContinentActions from './continent.actions';

export const CONTINENT_FEATURE_KEY = 'continent';

export interface ContinentState {
  continents: IContinent[];
  selectedId?: number;
  loaded: boolean; 
  error?: string | null;
}

export const initialContinentState: ContinentState = {
  continents: [],
  loaded: false,
  error: null
  };

const reducer = createReducer(
  initialContinentState,
  on(ContinentActions.initContinent, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ContinentActions.loadContinentSuccess, (state, { continents }) => ({
      ...state,
      continents, 
      loaded: true 
    })
  ),
  on(ContinentActions.loadContinentFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function continentReducer(
  state: ContinentState | undefined,
  action: Action
) {
  return reducer(state, action);
}
