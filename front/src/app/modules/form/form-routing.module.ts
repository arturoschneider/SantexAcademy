import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './form-page/form.component';

const routes: Routes = [
  {
    path: 'form',
    component: FormComponent,
  },
  /**{
    path:'**',
    redirectTo: "",
    pathMatch: 'full'
  }*/
];

@NgModule({
  imports: [RouterModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRoutingModule {}
