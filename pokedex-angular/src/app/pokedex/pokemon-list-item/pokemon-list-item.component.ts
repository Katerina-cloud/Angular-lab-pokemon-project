import { Input, Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Pokemon } from '../types/Pokemon';

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonListItemComponent implements OnInit {
  @Input() pokemon: Pokemon;
  @Output() catchPoke = new EventEmitter<Pokemon>();

  constructor() { }

  ngOnInit(): void {
  }

  onCatchBtnClick() {
    this.catchPoke.emit();
  }

  getStatus(pokemon: Pokemon): string {
    return pokemon.isCaught ? "Release" : "Catch";
  }
}
