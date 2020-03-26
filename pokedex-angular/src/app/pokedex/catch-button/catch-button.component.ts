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

  catch(pokemon) {
    pokemon.isCaught = !pokemon.isCaught;
    const status: string = pokemon.isCaught ? "пойман" : "отпущен";
    console.log(`Покемон ${pokemon.name} был ${status}`);
  }

  getStatus(pokemon) {
    return pokemon.isCaught ? "Release" : "Catch";
  }
}
