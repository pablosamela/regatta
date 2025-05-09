import { Action } from '@ngrx/store';

import * as ContinentActions from '../continent.actions';
import { IContinent } from '@shared/regatta';
import {
  ContinentState,
  initialContinentState,
  continentReducer,
} from '../continent.reducer';

describe('Continent Reducer', () => {
  const createContinentEntity = (id: number, name = '', code = ''): IContinent => ({
    id,
    name: name || `name-${id}`,
    code
  });

  describe('valid Continent actions', () => {
    it('loadContinentSuccess should return the list of known Continent', () => {
      const continents = [
        createContinentEntity(1, 'PRODUCT-AAA'),
        createContinentEntity(2, 'PRODUCT-zzz'),
      ];
      const action = ContinentActions.loadContinentSuccess({ continents });

      const result: ContinentState = continentReducer(
        initialContinentState,
        action
      );

      expect(result.loaded).toBe(true);
      expect(result.continents.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = continentReducer(initialContinentState, action);

      expect(result).toBe(initialContinentState);
    });
  });
});
