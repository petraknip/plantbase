import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PlantDetailComponent } from './plants/plant-detail/plant-detail.component';
import { PlantsComponent } from './plants/plants.component';

const routes: Routes = [
  { path: 'plants', component: PlantsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'detail/:id', component: PlantDetailComponent },
  { path: 'heroes', component: PlantsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
