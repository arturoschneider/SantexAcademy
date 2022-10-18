import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { EncuestaService } from 'src/app/core/services/encuesta/encuesta.service';
import { Encuestas } from 'src/app/core/interfaces/encuestas/encuestas';
import { Service } from '../../../core/services/encuesta/service';
import { DateRange } from '@angular/material/datepicker';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit{
  declare form : FormGroup;

  encuestas: Encuestas [] = [];
  authService: any;
  constructor (
    public encuestaService:EncuestaService,
    private fb: FormBuilder,
    private http:HttpClient,
    ){

  }
  logout() {
    this.authService.logOut();
  }
  onSubmit() {

  }
  ngOnInit():void {
  //  this.form = this.fb.group({
  //  daterange: new FormGroup({
  //  start: new FormControl()
  //  })
  //})
  //this.service.getEncuestas1().subscribe((response)=>{
  //this.encuesta=response;
  //})
    this.encuestaService.getEncuestas().subscribe((response)=>{
      this.encuestas = response;
      console.log(response);
    })
  }
}
