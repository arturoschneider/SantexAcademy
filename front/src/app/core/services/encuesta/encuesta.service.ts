import { Injectable } from '@angular/core';
import { Encuestas } from '../../interfaces/encuestas/encuestas';
import { ApiService } from '../../http/api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  constructor(
    private apiService: ApiService, // Servicio para Back-end
    private http: HttpClient, // Servicio para mocks
    ) {
  }

  url_get:string="instancia/adminEncuestas";
  url_create:string ="instancia/crearInstancia"
  getEncuestas(){
    return this.apiService.get<Encuestas[]>(this.url_get)
  }
  createEncuestas(url: string, body:any){
    return this.http.post(this.url_create, body);
  }

}
