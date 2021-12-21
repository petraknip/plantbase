import { Injectable } from '@angular/core';
import { IPlant } from './plant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PlantService {
  private _url: string = '/assets/data/plants.json';

  constructor(private http: HttpClient) {}

  getPlants(): Observable<IPlant[]> {
    return this.http.get<IPlant[]>(this._url);
  }
}

