import { Component, OnInit } from '@angular/core';

interface cards {
  image: string;
  btn: string;
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cards: cards [] = [
    {
      image: "assets/img/u2.webp",
      btn: "btn-danger",
    },
    {
      image: "assets/img/u3.webp",
      btn: "btn-warning",
    },
    {
      image: "assets/img/u4.webp",
      btn: "btn-info",
    },
  ]
}
