import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbaRoutingModule } from './nba-routing.module';
import {MaterialModule} from "../material/material.module";
import {MenuComponent} from "../../components/menu/menu.component";
import {HomeComponent} from "../../components/home/home.component";
import {TeamsComponent} from "../../components/teams/teams.component";
import {PlayersComponent} from "../../components/players/players.component";







@NgModule({
  declarations: [
    MenuComponent,
    HomeComponent,
    TeamsComponent,
    PlayersComponent,


  ],
  imports: [
    CommonModule,
    NbaRoutingModule,
    MaterialModule

  ]
})
export class NbaModule { }
