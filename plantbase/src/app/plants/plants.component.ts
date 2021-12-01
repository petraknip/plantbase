import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.scss'],
})
export class PlantsComponent implements OnInit {
  plant: Plant = {
    id: 1,
    name: 'Plant 1',
  };

  constructor() {}

  ngOnInit(): void {}
}
