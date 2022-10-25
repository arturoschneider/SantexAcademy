import { Injectable } from '@angular/core';
import { Users } from '../../interfaces/encuestas/user';
import { ApiService } from '../../http/api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private apiService: ApiService, // Servicio para Back-end
    private http: HttpClient, // Servicio para mocks
    ) {
  }

  url_dev:string="instancia/adminEncuestas";
  getUser(){
    return this.apiService.get<Users[]>(this.url_dev)
  }


}
