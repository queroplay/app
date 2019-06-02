import { TestBed } from '@angular/core/testing';

import { RankingAlunoService } from './ranking-aluno.service';

describe('RankingAlunoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RankingAlunoService = TestBed.get(RankingAlunoService);
    expect(service).toBeTruthy();
  });
});
