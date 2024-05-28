import {Component, Input} from '@angular/core';
import {Team} from "../../interface/team.interface";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
    @Input() team_prop: any;
}
