import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PokedexModule } from './pokedex/pokedex.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { PokedexRoutingModule } from './pokedex/pokedex-routing.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PokedexModule,
    PokedexRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
