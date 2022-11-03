import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ientradas } from '../../assets/models/entradas'
import { datosUrl } from '../../assets/data/config/config'



@Injectable({
  providedIn: 'root'
})
export class EntradasService {

  constructor(private http:HttpClient) { }

  nuevaEntrada(entrada: Ientradas): Observable<any>{
    return this.http.post<any>(datosUrl.baseUrl + 'entradas.json', entrada)
  }
}
