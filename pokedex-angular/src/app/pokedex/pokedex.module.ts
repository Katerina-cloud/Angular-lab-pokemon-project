import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonCaughtCardsComponent } from './pokemon-caught-cards/pokemon-caught-cards.component';
import { PokemonCardsComponent } from './pokemon-cards/pokemon-cards.component';
import { PokemonProfileComponent } from './pokemon-profile/pokemon-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PokemonsPageComponent } from './pokemons-page/pokemons-page.component';
import { PokemonsCaughtPageComponent } from './pokemons-caught-page/pokemons-caught-page.component';



@NgModule({
  declarations: [PokemonCardComponent, PokemonCaughtCardsComponent, PokemonCardsComponent, PokemonProfileComponent, NavbarComponent, PokemonsPageComponent, PokemonsCaughtPageComponent],
  imports: [
    CommonModule
  ]
})
export class PokedexModule { }
