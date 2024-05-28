import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import {MaterialModule} from "../material/material.module";
import {LayoutComponent} from "../components/layout-page/layout.component";
import {HomeComponent} from "../components/home-page/home.component";






@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent

  ],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    MaterialModule

  ]
})
export class TeamsModule { }
