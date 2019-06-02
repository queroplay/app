import { Component, OnInit } from '@angular/core';

import { RankingAluno } from '../../model/rankingAluno.model';
import { RankingAlunoService } from '../../providers/ranking-aluno.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  allAlunoRanking: RankingAluno[];

  constructor(private rankingAlunoService: RankingAlunoService) { }

  ngOnInit() {
    this.rankingAlunoService.getrankingAluno().subscribe(data => {
      this.allAlunoRanking = data as Array<RankingAluno>;
      console.log('Lista de ranking dos Alunos', this.allAlunoRanking)
    });
  }
}
