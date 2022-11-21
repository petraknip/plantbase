import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { PlantService } from './plant.service';
import { HttpClientModule } from '@angular/common/http';
import { PlantsModule } from './plants/plants.module';

@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PlantsModule,
  ],
  // providers: [PlantService],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
