import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  CONTINENT_FEATURE_KEY,
  ContinentState,
} from './continent.reducer';

// Lookup the 'Continent' feature state managed by NgRx
export const selectContinentState = createFeatureSelector<ContinentState>(
  CONTINENT_FEATURE_KEY
);


export const selectContinentLoaded = createSelector(
  selectContinentState,
  (state: ContinentState) => state.loaded
);

export const selectContinentError = createSelector(
  selectContinentState,
  (state: ContinentState) => state.error
);

export const selectAllContinent = createSelector(
  selectContinentState,
  (state: ContinentState) => state.continents
);

export const selectSelectedId = createSelector(
  selectContinentState,
  (state: ContinentState) => state.selectedId
);
