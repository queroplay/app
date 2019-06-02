import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

    url = 'http://queroplay.mybluemix.net/aluno/80c90cf346b587f7338ed2756a8d822eb';

  constructor( private http: HttpClient) { }

  getAluno() {
    return this.http.get(this.url);
  }
}
