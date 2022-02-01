import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PlantDetailComponent } from './plant-detail/plant-detail.component';
import { PlantsCreateComponent } from './create/plants-create.component';
import { PlantsCollectionComponent } from './collection/plants-collection.component';


@NgModule({
  declarations:[
    PlantDetailComponent,
    PlantsCreateComponent,
    PlantsCollectionComponent
  ],
  imports: [
    FormsModule
  ],
  providers: []
})
export class PlantsModule { }
