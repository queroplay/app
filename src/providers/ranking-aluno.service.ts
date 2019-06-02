import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RankingAlunoService {

  url = 'http://queroplay.mybluemix.net/ranking/semestre/aluno/95630422d42d5b2d8621d9bc2c2ab194'

  constructor( private http: HttpClient ) { }

  getrankingAluno() {
    return this.http.get(this.url);
  }
}
