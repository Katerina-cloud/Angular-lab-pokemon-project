import { Component, OnInit } from '@angular/core';
import { pokemonsArray } from './testData/pokemons';
import { Pokemon } from '../types/Pokemon';

@Component({
  selector: 'app-pokemons-page',
  templateUrl: './pokemons-page.component.html',
  styleUrls: ['./pokemons-page.component.scss']
})
export class PokemonsPageComponent implements OnInit {
  pokemons: Pokemon[] = pokemonsArray;
  pokemon: Pokemon = pokemonsArray[0];
  view: string = "gallery";

  constructor() { }

  ngOnInit(): void {
  }

  toggleView(viewType: string): void {
    this.view = viewType;
  }

  pokemonPageCatchOnClick(pokemon: Pokemon): void {
    pokemon.isCaught = !pokemon.isCaught;
    const status: string = pokemon.isCaught ? "caught" : "released";
    console.log(`Pokemon ${pokemon.name} was ${status}`);
  }
}
