import { Injectable, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as ContinentActions from './continent.actions';
import * as ContinentSelectors from './continent.selectors';

@Injectable()
export class ContinentFacade {
  private readonly store = inject(Store);

  loaded$ = this.store.pipe(
    select(ContinentSelectors.selectContinentLoaded)
  );
  
  allContinent$ = this.store.pipe(
    select(ContinentSelectors.selectAllContinent)
  );

  selectedContinent$ = this.store.pipe(
    select(ContinentSelectors.selectSelectedId)
  );

  init() {
    this.store.dispatch(ContinentActions.initContinent());
  }
}
