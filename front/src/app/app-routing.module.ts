import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from './core/guards/login/loggedin/loggedin.guard';
import { NotLoggedInGuard } from './core/guards/login/notloggedin/notloggedin.guard';
import { EncuestasModule } from './modules/encuestas/encuestas.module';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [NotLoggedInGuard],
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'dashboard',
    canActivate: [LoggedInGuard],
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'nav-bar',
    canActivate:[LoggedInGuard],
    loadChildren: ()=> import('./modules/nav-bar/nav-bar.module').then(m => m.NavBarModule),
  },
  {
    path: 'profile',
    canActivate: [LoggedInGuard],
    loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule),
  },
  {
    path: 'nuevaEncuesta',
    canActivate: [LoggedInGuard],
    loadChildren: () => import('./modules/dog/dog.module').then(m => m.DogModule),
  },
  {
    path: 'form',
    canActivate: [LoggedInGuard],
    loadChildren: () => import('./modules/form/form.module').then(m => m.FormModule),
  },
  {
    path:'encuesta',
    canActivate: [LoggedInGuard],
    loadChildren:()=> import('./modules/encuestas/encuestas.module').then(m=> m.EncuestasModule),
  },
  {
    path: '**',
    redirectTo: 'auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
