import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialCustomModule } from '../core/helpers/material-custom.module';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialCustomModule
  ]
})
export class RegisterModule { }
