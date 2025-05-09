import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { readFirst } from '@nx/angular/testing';

import * as ContinentActions from '../continent.actions';
import { ContinentEffects } from '../continent.effects';
import { ContinentFacade } from '../continent.facade';
import { IContinent } from '@shared/regatta';
import {
  CONTINENT_FEATURE_KEY,
  ContinentState,
  continentReducer,
} from '../continent.reducer';

interface TestSchema {
  continent: ContinentState;
}

describe('ContinentFacade', () => {
  let facade: ContinentFacade;
  let store: Store<TestSchema>;
  const createContinentEntity = (id: number, name = '', code = ''): IContinent => ({
    id,
    name: name || `name-${id}`,
    code: code
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(CONTINENT_FEATURE_KEY, continentReducer),
          EffectsModule.forFeature([ContinentEffects]),
        ],
        providers: [ContinentFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(ContinentFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allContinent$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allContinent$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadContinentSuccess` to manually update list
     */
    it('allContinent$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allContinent$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        ContinentActions.loadContinentSuccess({
          continents: [
            createContinentEntity(1,'AAA'),
            createContinentEntity(2,'BBB'),
          ],
        })
      );

      list = await readFirst(facade.allContinent$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
