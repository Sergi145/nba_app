import {Component, Input} from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
import {NbaService} from "../../services/nba.service";


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})

export class TeamComponent {

  constructor(private router: Router, private activatedRoute:ActivatedRoute, private nbaService:NbaService) {}

  @Input() team_prop: any;

  ngOnInit(): void {
    console.log("Iniciado");
  }


  onCardClick() {

    this.router.navigateByUrl(`/team/${this.team_prop.id}`, { state: { data: this.team_prop } });
    // this.nbaService.sendData(this.team_prop);

  }


}
