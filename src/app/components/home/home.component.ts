import { Component } from '@angular/core';
import {NbaService} from "../../services/nba.service";


@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  /*todo poner internface */


  users: any;
  teams:any;


  constructor(private userService: NbaService) { }

  ngOnInit(): void {

    this.userService.getTeams().subscribe(data => {
      this.teams = data;
    });
  }

}
