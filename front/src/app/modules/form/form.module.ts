import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DashboardModule } from '../dashboard/dashboard.module';
import { DogRoutingModule } from '../dog/dog-routing.module';

import { NewDogPageComponent } from '../dog/new-dog-page/new-dog-page.component';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { FormComponent } from './form-page/form.component';
import { LoginModule } from '../login/login.module';
import { FormRoutingModule } from './form-routing.module';


@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    DashboardModule,
    MatCardModule,
    NavBarModule,
  ],
  exports: [
    FormComponent,
  ]
})
export class FormModule {}
