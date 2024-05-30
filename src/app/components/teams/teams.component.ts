import {Component, Input} from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
import {NbaService} from "../../services/nba.service";


@Component({
  selector: 'app-card',
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent {
  constructor(private router: Router, private activatedRoute:ActivatedRoute, private userService:NbaService) {
  }

  @Input() team_prop: any;


  onCardClick() {

    this.userService.sendData(this.team_prop);
    this.router.navigateByUrl(this.team_prop.id);
    //console.log(this.team_prop.id);
  }


}
