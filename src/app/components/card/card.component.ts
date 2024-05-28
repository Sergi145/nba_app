import {Component, Input} from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  constructor(private router: Router, private activatedRoute:ActivatedRoute) {
  }

  @Input() team_prop: any;


  onCardClick() {
    this.router.navigateByUrl(this.team_prop.id)
    console.log(this.team_prop.id);
  }
}
