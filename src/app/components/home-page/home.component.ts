import { Component } from '@angular/core';
import {UserService} from "../user.service";


@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  /*todo poner internface */
  public logo_nba = [
    {
      icon: 'atlanta-hawks.svg',
      url: './../assets/img'
    },
    {
      icon: 'boston-celtics.svg',
      url: './../assets/img'
    }
  ]


  users: any;
  teams:any;


  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.userService.getTeams().subscribe(data => {
      this.teams = data;
    });
  }

}
