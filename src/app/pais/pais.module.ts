import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalComponent } from './pages/capital/capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';



@NgModule({
  declarations: [CapitalComponent, PorPaisComponent, PorRegionComponent, VerPaisComponent],
  exports: [
    CapitalComponent, PorPaisComponent, PorRegionComponent, VerPaisComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaisModule { }
