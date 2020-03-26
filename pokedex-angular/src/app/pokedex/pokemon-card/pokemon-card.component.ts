import { Input, Component, OnInit } from '@angular/core';
import { Pokemon } from '../types/Pokemon';


@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: Pokemon;

  constructor() { }

  ngOnInit(): void {
  }

  isDamaged(pokemon) {
    return pokemon.damage > 50;
  }
}
