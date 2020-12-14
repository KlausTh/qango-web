import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { Board } from './qango';
import { Observable } from 'rxjs';

@Injectable()
export class QangoService {

  constructor(private http: HttpClient) {}

  start() : Observable<Board> {
    let url = "http://localhost:8080/board/0";

    return this.http.get<Board>(url);
  }

  turn(id : number, index : number) : Observable<Board> {
    let url = "http://localhost:8080/board/" + id + "/turn/" + index;

    return this.http.get<Board>(url);
  }

  aiturn(id : number) : Observable<Board> {
    let url = "http://localhost:8080/board/" + id + "/aiturn";

    return this.http.get<Board>(url);
  }
}
