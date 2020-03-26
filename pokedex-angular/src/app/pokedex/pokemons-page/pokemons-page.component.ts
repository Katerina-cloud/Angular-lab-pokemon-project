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
  view: string = "gallery";
  toggleView(viewType: string) {
    this.view = viewType;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
