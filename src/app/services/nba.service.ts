import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NbaService {
  private apiUrl = 'http://localhost:3000';

  //Envio de datos (Emisor-Receptor)
  private dataSubject = new Subject<any>();
  data$ = this.dataSubject.asObservable();

  constructor(private http: HttpClient) { }

  //Función envio de datos, la ejecuta el emisor para enviar información
  sendData(data: any) {
    this.dataSubject.next(data);
  }

  //API
  getTeams(): Observable<any> {
    return this.http.get(this.apiUrl+"/teams");
  }
  getPlayersbyId(id:string): Observable<any> {
    return this.http.get(`${this.apiUrl}/players_attribute/`);
  }
}
