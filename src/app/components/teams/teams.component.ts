import { Component } from '@angular/core';
import {NbaService} from "../../services/nba.service";


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent {
  /*todo poner internface */


  users: any;
  teams:any;


  constructor(private nbaService: NbaService) { }

  ngOnInit(): void {

    this.nbaService.getTeams().subscribe(data => {
      this.teams = data;
    });
  }

}
