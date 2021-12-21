import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantDetailComponent } from './plants/plant-detail/plant-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlantsComponent } from './plants/plants.component';
import { HttpClientModule } from '@angular/common/http';
import { PlantService } from './plant.service';

@NgModule({
  declarations: [
    AppComponent,
    PlantsComponent,
    PlantDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PlantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
