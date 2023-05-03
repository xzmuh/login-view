import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TermosComponent } from './components/termos/termos.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { HomeComponent } from './components/home-page/home.component';
import { LoadingComponent } from './components/loading/loading.component';

const routes: Routes = [
  {path:"",component: LoginComponent},
  {path:"register",component: RegisterComponent},
  {path:"termos",component: TermosComponent},
  {path:"recover-password",component: RecoverPasswordComponent},
  {path:"home",component: HomeComponent},
  {path:"loading",component: LoadingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
