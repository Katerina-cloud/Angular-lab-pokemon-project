import { Injectable } from '@angular/core';
import { Pokemon } from './types/Pokemon';


@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor() { }
  private pokemons: Pokemon[] = [
    {
      "id": 1,
      "damage": 50,
      "name": "bulbazaur",
      "isCaught": true,
      "catchDate": "2020-02-19T20:13:24.407Z",
    },
    {
      "name": "ivysaur",
      "id": 2,
      "damage": 100
    },
    {
      "name": "venusaur",
      "id": 3,
      "damage": 79
    },
    {
      "name": "charmander",
      "id": 4,
      "damage": 40
    },
    {
      "name": "charmeleon",
      "id": 5,
      "damage": 30
    },
    {
      "name": "charizard",
      "id": 6,
      "damage": 55
    },
    {
      "name": "squirtle",
      "id": 7,
      "damage": 65
    },
    {
      "name": "wartortle",
      "id": 8,
      "damage": 85
    },
    {
      "name": "blastoise",
      "isCaught": true,
      "catchDate": "2020-02-19T20:13:24.407Z",
      "id": 9,
      "damage": 100
    },
    {
      "name": "caterpie",
      "isCaught": true,
      "catchDate": "2020-02-26T15:38:31.790Z",
      "id": 10,
      "damage": 100
    }
  ]

  getAll(): Pokemon[] {
    return this.pokemons;
  }

  filterByName(pokeName): Pokemon[] {
    return this.pokemons.filter(pokemon => {
      if (pokemon.name.includes(pokeName.toLowerCase())) {
        return pokemon;
      }
    });
  }

  getById(pokeId): Pokemon {
    let pokeById: Pokemon[] = this.pokemons.filter(pokemon => {
      if (pokemon.id === pokeId) {
        return pokemon;
      }
    })
    return pokeById.pop();
  }
}
