import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RankingAlunoService {

  url = 'http://queroplay.mybluemix.net/ranking/semestre/aluno/'

  constructor( private http: HttpClient ) { }

  getrankingAluno(id) {
    return this.http.get(this.url + id);
  }
}
