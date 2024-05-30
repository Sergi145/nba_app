import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import {HttpClientModule} from "@angular/common/http";
import {MaterialModule} from "./material/material.module";
import {SharedModule} from "./shared/shared.module";

//configuracxion del locale de la app

import localeES from  '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';
registerLocaleData(localeES);


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    MaterialModule

  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'},
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
