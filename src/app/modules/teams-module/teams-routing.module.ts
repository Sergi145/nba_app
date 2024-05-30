import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "../../components/home/home.component";
import {MenuComponent} from "../../components/menu/menu.component";
import {PlayersComponent} from "../../components/players/players.component";

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,//Pantalla Inicial
    children: [
      { path: 'teams', component: HomeComponent },
      { path: ':id', component: PlayersComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
