import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../types/Pokemon';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-pokemon-profile',
  templateUrl: './pokemon-profile.component.html',
  styleUrls: ['./pokemon-profile.component.scss']
})
export class PokemonProfileComponent implements OnInit {
  pokemon: Pokemon;
  @Output() catchPoke = new EventEmitter<Pokemon>();

  constructor(private accountsService: AccountsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.pokemon = this.accountsService.getById(Number(id));
  }

  onCatchBtnClick(pokemon: Pokemon): void {
    pokemon.isCaught = !pokemon.isCaught;
    const status: string = pokemon.isCaught ? "caught" : "released";
    console.log(`Pokemon ${pokemon.name} was ${status}`);
  }

  getStatus(pokemon: Pokemon): string {
    return pokemon.isCaught ? "Release" : "Catch";
  }

  formatCatchDate(date) {
    if (date) {
      const catchData = new Date(date);
      const day = "0" + catchData.getDate();
      const month = "0" + (catchData.getMonth() + 1);
      const year = catchData.getFullYear();

      return `${day.substr(-2)}.${month.substr(-2)}.${year}`;
    }
  }
}
