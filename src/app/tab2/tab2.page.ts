import { Component, OnInit } from '@angular/core';

import { RankingAluno } from '../../model/rankingAluno.model';
import { RankingAlunoService } from '../../providers/ranking-aluno.service';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  allAlunoRanking: RankingAluno[];
  data: string;
  constructor(
    private rankingAlunoService: RankingAlunoService,
    private router: Router,
    private route: ActivatedRoute ) {

      this.route.queryParams.subscribe(params => {
        console.log(this.router.getCurrentNavigation())
        if (this.router.getCurrentNavigation().extractedUrl.queryParams) {
          this.data = this.router.getCurrentNavigation().extractedUrl.queryParams.id;
        }
      });
  }

  ngOnInit() {
    this.rankingAlunoService.getrankingAluno(this.data).subscribe(data => {
      this.allAlunoRanking = data as Array<RankingAluno>;
      console.log('Lista de ranking dos Alunos', this.allAlunoRanking)
    });
  }

  openDetailsWithQueryParams() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: JSON.stringify(this.data)
      }
    };
    this.router.navigate([''], navigationExtras);
  }
}
