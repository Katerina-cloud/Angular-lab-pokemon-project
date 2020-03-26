import { Input, Component, OnInit } from '@angular/core';
import { Pokemon } from '../types/Pokemon';

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.scss']
})
export class PokemonListItemComponent implements OnInit {
  @Input() pokemon: Pokemon;
  constructor() { }

  ngOnInit(): void {
  }

  public catch(event, pokemon) {
    pokemon.isCaught = !pokemon.isCaught;
    const status: string = pokemon.isCaught ? "пойман" : "отпущен";
    console.log(`Покемон ${pokemon.name} был ${status}`);
  }

  public getStatus(pokemon) {
    return pokemon.isCaught ? "Release" : "Catch";
  }

  isDamaged(pokemon) {
    return pokemon.damage > 50;
  }

}
