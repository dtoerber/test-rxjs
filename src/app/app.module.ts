import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import {
  HomeComponent,
  NavComponent,
  SwitchMapComponent,
  MergeMapComponent,
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SwitchMapComponent,
    HomeComponent,
    MergeMapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
