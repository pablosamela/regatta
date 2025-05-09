import { IContinent } from '@shared/regatta';
import {
  ContinentState,
  initialContinentState,
} from '../continent.reducer';
import * as ContinentSelectors from '../continent.selectors';

describe('Continent Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getContinentId = (it: IContinent) => it.id;
  const createContinentEntity = (id: number, name = '', code = '') =>
    ({
      id,
      name: name || `name-${id}`,
      code
    } as IContinent);

  let state: ContinentState;

  beforeEach(() => {
    state = 
      {
        ...initialContinentState,
        continents:         [
          createContinentEntity(1, 'PRODUCT-AAA'),
          createContinentEntity(2, 'PRODUCT-BBB'),
          createContinentEntity(3, 'PRODUCT-CCC'),
        ],
        selectedId: 1,
        error: ERROR_MSG,
        loaded: true,
      };
  });

  describe('Continent Selectors', () => {
    it('selectAllContinent() should return the list of Continent', () => {
      const results = ContinentSelectors.selectAllContinent(state);
      const selId = getContinentId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = ContinentSelectors.selectSelectedId;
      expect(result).toBe(1);
    });

    it('selectContinentLoaded() should return the current "loaded" status', () => {
      const result = ContinentSelectors.selectContinentLoaded(state);

      expect(result).toBe(true);
    });

    it('selectContinentError() should return the current "error" state', () => {
      const result = ContinentSelectors.selectContinentError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
