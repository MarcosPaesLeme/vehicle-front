import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoautheticatedGuard } from './core/guards/noautheticated.guard'

const routes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginModule' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterModule' },
  { path: 'list', loadChildren: './list-vehicles/list-vehicles.module#ListVehiclesModule', canActivate: [ NoautheticatedGuard ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
