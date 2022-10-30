import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from '../form/form-page/form.component';

import { NewDogPageComponent } from './new-dog-page/new-dog-page.component';

const routes: Routes = [
  {
    path: '',
    component: NewDogPageComponent,
    children: [],
  },

  { path: 'form',
  component: FormComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DogRoutingModule {}
