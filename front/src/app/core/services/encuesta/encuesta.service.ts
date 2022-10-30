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

  // URLs para el servicio de busqueda y creacion de encuestas.
  url_get:string="instancia/adminEncuestas";
  url_create:string ="instancia/crearInstancia";
  url_busqueda:string = "instancia/busquedaEncuestas"

  // Búsqueda de encuestas
  getEncuestas(){
    return this.apiService.get<Encuestas[]>(this.url_get)
  }

  // Crear una nueva encuesta
  createEncuestas(url: string, body:any){
    return this.apiService.post(this.url_create, body);
  }

  // Búsqueda de encuestas
  busquedaEncuesta (url:string, body:any){
    return this.apiService.get<Encuestas[]>(this.url_busqueda, body)
  }
}
