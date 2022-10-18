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

  url_dev:string="/instancia/adminEncuestas";
  getEncuestas(){
    return this.http.get<Encuestas[]>(this.url_dev)
  }
}
