import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "../components/home-page/home.component";
import {LayoutComponent} from "../components/layout-page/layout.component";
import {PlayersPageComponent} from "../components/players-page/players-page.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'teams', component: HomeComponent },
      { path: ':id', component: PlayersPageComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
