import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "../components/home-page/home.component";
import {LayoutComponent} from "../components/layout-page/layout.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'teams', component: HomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
