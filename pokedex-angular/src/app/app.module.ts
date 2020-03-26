import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PokedexModule } from './pokedex/pokedex.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PokedexModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
