import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PokedexModule } from './pokedex/pokedex.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PokedexModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
