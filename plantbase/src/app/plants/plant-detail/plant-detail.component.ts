import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPlant } from 'src/app/plant';

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.component.html',
  styleUrls: ['./plant-detail.component.scss'],
})
export class PlantDetailComponent {
  // public plants : IPlant[] = [];
  // public plants : IPlant[] = [];

  @Input()
  plant!: IPlant;
  // plantService: any;

  constructor(
    private route: ActivatedRoute,
    // private plantService: PlantService,
    private location: Location
  ) {}

  // ngOnInit(): void {
  //   this.plantService.getPlants()
  //   .subscribe(data => this.plants = data);
  // }
}
