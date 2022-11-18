import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ientradas } from '../../assets/models/entradas'
import { datosUrl } from '../../assets/data/config/config'
import { map } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EntradasService {

  constructor(private http:HttpClient) { }

  nuevaEntrada(entrada: Ientradas): Observable<any>{
    return this.http.post<any>(datosUrl.baseUrl + 'entradas.json', entrada);
  }

  mostrarEntrada():Observable<any>{
   return this.http.get<{[key: string]: Ientradas}>(datosUrl.baseUrl + 'entradas.json')
    .pipe(map((res) => {
      const entradas = []
      for (const key in res)
        if(res.hasOwnProperty(key)){
          entradas.push({...res[key], id: key})
        }
        return entradas    
    }));
  }
}
