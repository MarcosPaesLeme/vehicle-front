import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { MaterialCustomModule } from '../core/helpers/material-custom.module';
import { AuthService } from '../core/services/auth.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialCustomModule
  ],
  providers: [
    AuthService
  ]
})

export class LoginModule { }
