import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonProfileComponent } from './pokemon-profile/pokemon-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PokemonsPageComponent } from './pokemons-page/pokemons-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { PokemonListItemComponent } from './pokemon-list-item/pokemon-list-item.component';
import { CatchButtonComponent } from './catch-button/catch-button.component';

@NgModule({
  declarations: [
    PokemonCardComponent,
    PokemonProfileComponent,
    NavbarComponent,
    PokemonsPageComponent,
    PokemonListItemComponent,
    CatchButtonComponent
  ],
  imports: [CommonModule, MatCardModule, MatButtonModule, FlexLayoutModule, MatListModule, MatIconModule],
  exports: [PokemonProfileComponent,
    NavbarComponent,
    PokemonsPageComponent]
})
export class PokedexModule { }
