import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { EncuestaService } from 'src/app/core/services/encuesta/encuesta.service';
import { Encuestas } from 'src/app/core/interfaces/encuestas/encuestas';
import { Service } from '../../../core/services/encuesta/service';
import { DateRange } from '@angular/material/datepicker';
import { HttpClient } from '@angular/common/http';
import { UsersService } from 'src/app/core/services/user/users.service';
import { Users} from 'src/app/core/interfaces/encuestas/user';



@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit{
  public search = this.formBuilder.group({});
  encuestas: Encuestas [] = [];
  authService: any;
  encuestador: any;
  n_vivienda:any;
  constructor (
    public encuestaService:EncuestaService,

    public userService: UsersService,
    private formBuilder: UntypedFormBuilder,
    private http:HttpClient,
    ){
      //JSON.stringify() LOCAL Storage
      //(JSON.parse('') as Users).createdAt
  }
  logout() {
    this.authService.logOut();
  }
  onSubmit() {

  }

  ngOnInit():void {
    // Servicio para traer las encuestas del encuestador o todas las encuestas si el user es admin
    this.encuestaService.getEncuestas().subscribe((response)=>{
      this.encuestas = response;
      console.log(response);
    })

    this.search = this.formBuilder.group({
      encuestador: new UntypedFormControl(
        null,
        Validators.compose([Validators.required])
      ),
      fecha: new UntypedFormControl(
        null,
        Validators.compose([Validators.required])
        ),

      num_vivienda: new UntypedFormControl(
        null,
        Validators.compose([Validators.required])
      ),

      num_hogar: new UntypedFormControl(
        null,
        Validators.compose([Validators.required])
      ),
    });
  }


  Search() {
    if (this.search.valid) {
      const value = this.search.value;

    this.encuestaService.busquedaEncuesta('http://localhost:4001/instancia/busquedaEncuestas', value).subscribe((res)=> {
      this.encuestas = res;
      console.log('Encuesta buscada');
      console.log(res);

    })
  }
}}
