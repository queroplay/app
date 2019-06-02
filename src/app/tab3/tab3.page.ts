import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  openDetailsWithQueryParams() {
    alert("Parabéns você acertou!");

    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: JSON.stringify("")
      }
    };
    this.router.navigate([''], navigationExtras);
  }

}
