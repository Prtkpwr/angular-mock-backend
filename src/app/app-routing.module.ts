import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestAccessComponent } from './request-access/request-access.component';
import { SignupComponent } from './signup/signup.component';
import { RequestSuccessComponent } from './request-success/request-success.component';

const routes: Routes = [
  {path:"request-access",component:RequestAccessComponent},
  {path:"signup",component:SignupComponent},
  {path:"request-success",component:RequestSuccessComponent},
  {path:"",redirectTo:"request-access", pathMatch:"full"},
  {path:"**",redirectTo:"request-access", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
