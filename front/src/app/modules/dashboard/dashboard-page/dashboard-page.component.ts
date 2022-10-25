import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
  declare form : FormGroup;

  encuestas: Encuestas [] = [];
  authService: any;
  encuestador: any;
  n_vivienda:any;
  constructor (
    public encuestaService:EncuestaService,
    public userService: UsersService,
    private fb: FormBuilder,
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
  }
  Search() {
    if (this.encuestador == ""){
      this.ngOnInit();
    }else {
      this.encuestas= this.encuestas.filter(res => {
        return //res.user.toLocaleLowerCase().match(this.encuestador.toLocaleLowerCase())
      })
    }
  }
  searchVivienda(){
    if (this.n_vivienda == ""){
      this.ngOnInit();
    }else{
      this.encuestas = this.encuestas.filter(res=> {
        return res.num_vivienda
      })
    }
  }
}
