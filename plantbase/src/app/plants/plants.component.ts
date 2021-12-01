import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
// import { PLANTS } from '../mock-plants';
import { Plant } from '../plant';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.scss'],
})
export class PlantsComponent implements OnInit {


  selectedPlant?: Plant;
  plants: Plant[] = [];

  constructor(
    private plantService: PlantService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getPlants();
  }

  onSelect(plant: Plant): void {
    this.selectedPlant = plant;
    this.messageService.add(`PlantComponent: Selected plant id=${plant.id}`);
  }

  getPlants(): void {
    this.plantService.getPlants().subscribe((plants) => (this.plants = plants));
  }
}
