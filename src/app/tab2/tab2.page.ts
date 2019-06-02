import { Component, OnInit } from '@angular/core';

import { People } from '../../model/people.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  allPeople: People[];
  people = [
    { 
      name: 'Augusto Bondança', 
      image: 'https://www.impacta.edu.br/blog/wp-content/uploads/2018/08/augusto-b.jpg',
      pontuation: 200
     },
     { 
      name: 'Augusto Bondança', 
      image: 'https://www.impacta.edu.br/blog/wp-content/uploads/2018/08/augusto-b.jpg',
      pontuation: 200
     },
     { 
      name: 'Augusto Bondança', 
      image: 'https://www.impacta.edu.br/blog/wp-content/uploads/2018/08/augusto-b.jpg',
      pontuation: 200
     },
     { 
      name: 'Augusto Bondança', 
      image: 'https://www.impacta.edu.br/blog/wp-content/uploads/2018/08/augusto-b.jpg',
      pontuation: 200
     },
     { 
      name: 'Augusto Bondança', 
      image: 'https://www.impacta.edu.br/blog/wp-content/uploads/2018/08/augusto-b.jpg',
      pontuation: 200
     },
     { 
      name: 'Augusto Bondança', 
      image: 'https://www.impacta.edu.br/blog/wp-content/uploads/2018/08/augusto-b.jpg',
      pontuation: 200
     },
     { 
      name: 'Augusto Bondança', 
      image: 'https://www.impacta.edu.br/blog/wp-content/uploads/2018/08/augusto-b.jpg',
      pontuation: 200
     },
     { 
      name: 'Augusto Bondança', 
      image: 'https://www.impacta.edu.br/blog/wp-content/uploads/2018/08/augusto-b.jpg',
      pontuation: 200
     },
     { 
      name: 'Augusto Bondança', 
      image: 'https://www.impacta.edu.br/blog/wp-content/uploads/2018/08/augusto-b.jpg',
      pontuation: 200
     },
     { 
      name: 'Augusto Bondança', 
      image: 'https://www.impacta.edu.br/blog/wp-content/uploads/2018/08/augusto-b.jpg',
      pontuation: 200
     },
  ]

  constructor() {}

  ngOnInit() {
    this.allPeople = new Array<People>();
    this.allPeople = this.people;
  

    // this.peopleService.getDataHouse().subscribe(data => {
    //   this.allPeople = data as Array<People>;
    // });
  }
}
