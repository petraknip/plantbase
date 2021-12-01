import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlantDetailComponent } from './plants/plant-detail/plant-detail.component';
import { PlantsComponent } from './plants/plants.component';

const routes: Routes = [
  { path: 'plants', component: PlantsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: PlantDetailComponent },
  { path: 'plants', component: PlantsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
