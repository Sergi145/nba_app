import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbaRoutingModule } from './nba-routing.module';
import {MaterialModule} from "../material/material.module";
import {LayoutComponent} from "../../components/layout/layout.component";
import {TeamsComponent} from "../../components/teams/teams.component";
import {TeamComponent} from "../../components/team/team.component";
import {PlayersComponent} from "../../components/players/players.component";







@NgModule({
  declarations: [
    LayoutComponent,
    TeamsComponent,
    TeamComponent,
    PlayersComponent,


  ],
  imports: [
    CommonModule,
    NbaRoutingModule,
    MaterialModule

  ]
})
export class NbaModule { }
