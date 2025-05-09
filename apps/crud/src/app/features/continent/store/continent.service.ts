import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IContinent } from '@shared/regatta';

@Injectable({
  providedIn: 'root'
})
export class ContinentService {
  private _http = inject(HttpClient);


  getAllContinents(): Observable<IContinent[]>{
    return this._http.get<IContinent[]>('/api/continent');
  }

  
}
