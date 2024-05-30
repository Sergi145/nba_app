import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TeamsComponent} from "../../components/teams/teams.component";
import {LayoutComponent} from "../../components/layout/layout.component";
import {PlayersComponent} from "../../components/players/players.component";
import {HomeComponent} from "../../components/home/home.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,//Pantalla Inicial
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'teams', component: TeamsComponent },
      { path: ':id', component: PlayersComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NbaRoutingModule { }
