import { Input, Component, OnInit } from '@angular/core';
import { Pokemon } from '../types/Pokemon';

@Component({
  selector: 'app-catch-button',
  templateUrl: './catch-button.component.html',
  styleUrls: ['./catch-button.component.scss']
})
export class CatchButtonComponent implements OnInit {
  @Input() pokemon: Pokemon;

  constructor() { }

  ngOnInit(): void {
  }

  catch(pokemon: Pokemon): void {
    pokemon.isCaught = !pokemon.isCaught;
    const status: string = pokemon.isCaught ? "caught" : "released";
    console.log(`Pokemon ${pokemon.name} was ${status}`);
  }

  getStatus(pokemon: Pokemon): string {
    return pokemon.isCaught ? "Release" : "Catch";
  }
}
