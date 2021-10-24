import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map,delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http:HttpClient) { }

  getUsuariosRedesSociales(){
    return this.http.get('http://localhost:3000/grafica');
  }

  getUsuariosRedesSocialesDonutData(){
    return this.getUsuariosRedesSociales().pipe(
      delay(1500),
      map(data=>{
        const label=Object.keys(data);
        const values=Object.values(data);
        return{label,values};
      })
    );
  }

}
