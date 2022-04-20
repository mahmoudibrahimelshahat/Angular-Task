import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeComponent } from './components/code/code.component';
import { LoginComponent } from './components/login/login.component';
import { PhoneNumberComponent } from './components/phone-number/phone-number.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './shared/auth-guard.service';
import { AuthGuard2 } from './shared/auth-guard2.service';

const routes: Routes = [
  {path: '',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent, canActivate:[AuthGuard2]},
  { path: 'phone', component: PhoneNumberComponent , canActivate:[AuthGuard2]},
  { path: 'code', component: CodeComponent, canActivate:[AuthGuard2] },
  {path:'register',component:RegisterComponent, canActivate:[AuthGuard2]},
  {
    path:"videos",
    loadChildren: () => import('../app/videos/videos.module').then(x => x.VideosModule),
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
