import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Encuestas } from "../../interfaces/encuestas/encuestas";

@Injectable({
  providedIn: 'root'
})
export class Service {
  constructor(private http:HttpClient){
  //   this.getEncuestas1().subscribe(data => {
  //     console.log(data);
  // });
  }
  url:string="http://localhost:3000/encuestas";
  public getEncuestas1(){
    return this.http.get<Encuestas[]>(this.url);
  }
}

