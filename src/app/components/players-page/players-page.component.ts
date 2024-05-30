import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap} from "rxjs";


@Component({
  selector: 'app-players-page',
  templateUrl: './players-page.component.html',
  styleUrl: './players-page.component.css'
})
export class PlayersPageComponent implements OnInit {
    constructor(private playersService: UserService, private activatedRoute:ActivatedRoute) {
    }

    players_teams: any[]= [];
    info_team:any;

    ngOnInit():void {
      //console.log(this.activatedRoute.params);

      this.playersService.data$.subscribe( info => {
          this.info_team = info;

          console.log(info);
      })


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
            //console.log(x);
            if (player.TEAM_ID  == params["id"] && player.ROSTERSTATUS === "Active") {
              this.players_teams.push(player);
            }
          })
            console.log(this.players_teams);
      });
    })
  }
}


