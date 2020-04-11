import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../types/Pokemon';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-pokemons-page',
  templateUrl: './pokemons-page.component.html',
  styleUrls: ['./pokemons-page.component.scss'],
  providers: [AccountsService]
})
export class PokemonsPageComponent implements OnInit {
  pokemons: Pokemon[] = [];
  pokemon: Pokemon;
  view: string = "gallery";

  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {
    this.pokemons = this.accountsService.getAll();
    this.pokemon = this.accountsService.getById(1);
  }

  toggleView(viewType: string): void {
    this.view = viewType;
  }

  pokemonPageCatchOnClick(pokemon: Pokemon): void {
    pokemon.isCaught = !pokemon.isCaught;
    const status: string = pokemon.isCaught ? "caught" : "released";
    console.log(`Pokemon ${pokemon.name} was ${status}`);
  }

  pokemonPageSearchOnClick(pokeName: string): void {
    if (pokeName.length) {
      this.pokemons = this.accountsService.filterByName(pokeName);
    } else {
      this.pokemons = this.accountsService.getAll();
    }
  }
}
