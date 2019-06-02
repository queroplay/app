import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

    url = 'http://queroplay.mybluemix.net/aluno/';

  constructor( private http: HttpClient ) { }

  getAluno(id) {
    return this.http.get(this.url + id);
  }
}
