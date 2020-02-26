import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListVehiclesComponent } from './list-vehicles.component';
import { ListVehiclesRoutingModule } from './list-vehicles-routing.module';
import { HttpClientModule } from '@angular/common/http'; 
import { MaterialCustomModule } from '../core/helpers/material-custom.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalModule } from '../core/modal/modal.module';
import { VehicleService } from '../core/services/vehicle.service';
import { AuthService } from '../core/services/auth.service';

@NgModule({
  declarations: [ListVehiclesComponent],
  imports: [
    CommonModule,
    ListVehiclesRoutingModule,
    HttpClientModule,
    MaterialCustomModule,
    MatDialogModule,
    ModalModule
  ], 
  providers: [
    VehicleService,
    AuthService
  ]
})
export class ListVehiclesModule { }
