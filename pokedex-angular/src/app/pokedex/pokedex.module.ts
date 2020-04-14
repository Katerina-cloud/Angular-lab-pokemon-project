import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonProfileComponent } from './pokemon-profile/pokemon-profile.component';
import { PokemonsPageComponent } from './pokemons-page/pokemons-page.component';
import { PokemonListItemComponent } from './pokemon-list-item/pokemon-list-item.component';
import { BorderBoldDirective } from './border-style.directive';
import { BorderBottomDirective } from './border-style-bottom.directive';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';


@NgModule({
  declarations: [
    PokemonCardComponent,
    PokemonProfileComponent,
    PokemonsPageComponent,
    PokemonListItemComponent,
    BorderBoldDirective,
    BorderBottomDirective,
    SearchPokemonComponent
  ],
  imports: [CommonModule],
  exports: [PokemonProfileComponent,
    PokemonsPageComponent]
})
export class PokedexModule { }
