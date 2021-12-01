import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Plant } from './plant';
import { PLANTS } from './mock-plants';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class PlantService {
  constructor(private messageService: MessageService) {}

  getPlants(): Observable<Plant[]> {
    const plants = of(PLANTS);
    this.messageService.add('PlantService: Opgehaalde planten');
    return plants;
  }

  getPlant(id: number): Observable<Plant> {
    // a plant with the specified `id` always exists.
    // Error handling will be added in the next step.
    const plant = PLANTS.find((h) => h.id === id)!;
    this.messageService.add(`PlantService: Opgehaalde planten id=${id}`);
    return of(plant);
  }
}