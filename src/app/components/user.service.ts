import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000';
  private dataSubject = new Subject<any>();
  data$ = this.dataSubject.asObservable();

  constructor(private http: HttpClient) { }


  getTeams(): Observable<any> {
    return this.http.get(this.apiUrl+"/teams");
  }

  getPlayersbyId(id:string): Observable<any> {
    return this.http.get(`${this.apiUrl}/players_attribute/`);
  }

  sendData(data: any) {
    this.dataSubject.next(data);
  }
}
