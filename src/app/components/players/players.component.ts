import {Component, OnInit} from '@angular/core';
import {NbaService} from "../../services/nba.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrl: './players.component.css'
})
export class PlayersComponent implements OnInit {
    constructor(private playersService: NbaService, private activatedRoute:ActivatedRoute, private router: Router) {
      const navigation = this.router.getCurrentNavigation();
      const data = navigation?.extras?.state?.['data'];
      this.info_team = data;
    }

    players_teams: any[]= [];
    info_team:any

    ngOnInit():void {

      /*this.playersService.data$.subscribe( info => {
          this.info_team = info;
      })*/

      this.activatedRoute.params.subscribe(params => {
        this.playersService.getPlayersbyId(params["id"])
          .subscribe(players => {
              //console.log(players);
            //for(let i=0; i<=players.length; i++) {

           // if(players[i].TEAM_ID == params["id"] && players[i].ROSTERSTATUS === "Active") {
                //console.log(players[i]);
               // this.players_teams.push(players[i]);
            //}
          //}
          players.map((player:any)=> {

            if (player.TEAM_ID  == params["id"] && player.ROSTERSTATUS === "Active") {
              this.players_teams.push(player);
            }
          })
            console.log(this.players_teams);
      });
    })
  }
}


