import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as ContinentActions from '../continent.actions';
import { ContinentEffects } from '../continent.effects';

describe('ContinentEffects', () => {
  let actions: Observable<Action>;
  let effects: ContinentEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        ContinentEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(ContinentEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: ContinentActions.initContinent() });

      const expected = hot('-a-|', {
        a: ContinentActions.loadContinentSuccess({ continents: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
