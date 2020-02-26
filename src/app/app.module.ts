import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { VehicleService } from './core/services/vehicle.service';
import { AuthService } from './core/services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    // EditModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    VehicleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
