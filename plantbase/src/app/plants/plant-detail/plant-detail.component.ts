import { Component, OnInit, Input } from '@angular/core';
import { Plant } from '../../plant';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PlantService } from '../../plant.service';

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.component.html',
  styleUrls: ['./plant-detail.component.scss'],
})
export class PlantDetailComponent implements OnInit {
  plant: Plant | undefined;
  // @Input() plant?: Plant;

  constructor(
    private route: ActivatedRoute,
    private plantService: PlantService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPlant();
  }

  getPlant(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.plantService.getPlant(id)
      .subscribe(plant => this.plant = plant);
  }

  goBack(): void {
    this.location.back();
  }
}
