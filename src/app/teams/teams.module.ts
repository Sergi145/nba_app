import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import {MaterialModule} from "../material/material.module";
import {LayoutComponent} from "../components/layout/layout.component";
import {HomeComponent} from "../components/home/home.component";




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
