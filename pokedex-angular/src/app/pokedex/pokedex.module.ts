import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonProfileComponent } from './pokemon-profile/pokemon-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PokemonsPageComponent } from './pokemons-page/pokemons-page.component';
import { PokemonListItemComponent } from './pokemon-list-item/pokemon-list-item.component';
import { BorderBoldDirective } from './border-style.directive';
import { BorderBottomDirective } from './border-style-bottom.directive';


@NgModule({
  declarations: [
    PokemonCardComponent,
    PokemonProfileComponent,
    NavbarComponent,
    PokemonsPageComponent,
    PokemonListItemComponent,
    BorderBoldDirective,
    BorderBottomDirective
  ],
  imports: [CommonModule],
  exports: [PokemonProfileComponent,
    NavbarComponent,
    PokemonsPageComponent]
})
export class PokedexModule { }
