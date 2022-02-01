import { Component, OnInit } from '@angular/core';
import { IPlant } from 'src/app/plant';
import { PlantService } from 'src/app/plant.service';


@Component({
  selector: 'app-plants-collection',
  templateUrl: './plants-collection.component.html',
  styleUrls: ['./plants-collection.component.scss']
})
export class PlantsCollectionComponent implements OnInit {

  public plants : IPlant[] = [];

  constructor(
    private plantService: PlantService
    ) { }

  ngOnInit(): void {
        this.plantService.getPlants().subscribe((data) => (this.plants = data));
  }

}
