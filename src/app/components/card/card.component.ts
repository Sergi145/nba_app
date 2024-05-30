import {Component, Input} from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../user.service";


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  constructor(private router: Router, private activatedRoute:ActivatedRoute, private userService:UserService) {
  }

  @Input() team_prop: any;


  onCardClick() {

    this.userService.sendData(this.team_prop);
    this.router.navigateByUrl(this.team_prop.id);
    //console.log(this.team_prop.id);
  }


}
