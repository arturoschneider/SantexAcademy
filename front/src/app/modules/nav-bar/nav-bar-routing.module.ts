import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from '../dashboard/dashboard-page/dashboard-page.component';
import { FormComponent } from '../form/form-page/form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [
  {
    path: '',
    component: NavBarComponent,
    children: [
      {
        path:'form',
        component: FormComponent,
      },
      {
        path:'dashboard',
        component: DashboardPageComponent
      }

    ]
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavBarRoutingModule { }
