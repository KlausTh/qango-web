import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { Board } from './qango';
import { Observable } from 'rxjs';
import { environment } from './../environments/environment';

@Injectable()
export class QangoService {

  constructor(private http: HttpClient) {}

  start() : Observable<Board> {
    let url = environment.qangoUrl + "board/0";

    return this.http.get<Board>(url);
  }

  turn(id : number, index : number) : Observable<Board> {
    let url = environment.qangoUrl + "board/" + id + "/turn/" + index;

    return this.http.get<Board>(url);
  }

  aiturn(id : number) : Observable<Board> {
    let url = environment.qangoUrl + "board/" + id + "/aiturn";

    return this.http.get<Board>(url);
  }
}
