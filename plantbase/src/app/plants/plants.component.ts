import { Component, OnInit } from '@angular/core';
import { PlantService } from '../plant.service';
import { Plant } from '../plants';


@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.scss'],
})
export class PlantsComponent implements OnInit {
  public plants = [];

  constructor(private _plantService: PlantService) {}

  ngOnInit(): void {
    this._plantService.getPlants()
          .subscribe(data => this.plants = data);
}
}