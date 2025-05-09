import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map } from 'rxjs';

import { IContinent } from '@shared/regatta';
import * as ContinentActions from './continent.actions';
import { ContinentService } from './continent.service';

@Injectable()
export class ContinentEffects {
  private actions$ = inject(Actions);
  private continentService = inject(ContinentService);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContinentActions.initContinent),
      switchMap(()=> this.continentService.getAllContinents()),
      switchMap((continents: IContinent[]) =>
        of(ContinentActions.loadContinentSuccess({ continents }))
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(ContinentActions.loadContinentFailure({ error }));
      })
    )
  );
}
