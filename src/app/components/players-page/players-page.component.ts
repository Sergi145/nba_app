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

    ngOnInit():void {
      this.activatedRoute.params
        .pipe(
          switchMap(({id})=> this.playersService.getPlayersbyId(id)),
        ).subscribe(params => {
          console.log({params});
      })
    }
}
