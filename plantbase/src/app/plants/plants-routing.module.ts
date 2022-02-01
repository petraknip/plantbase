import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantsCollectionComponent } from './collection/plants-collection.component';
import { PlantsCreateComponent } from './create/plants-create.component';
import { PlantDetailComponent } from './plant-detail/plant-detail.component';

const routes: Routes = [
  { path: 'collection', component: PlantsCollectionComponent },
  { path: 'detail/:id', component: PlantDetailComponent },
  { path: 'create', component: PlantsCreateComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PlantsRoutingModule { }
