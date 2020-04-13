import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../types/Pokemon';
import { AccountsService } from '../accounts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemons-page',
  templateUrl: './pokemons-page.component.html',
  styleUrls: ['./pokemons-page.component.scss'],
  providers: [AccountsService]
})
export class PokemonsPageComponent implements OnInit {
  pokemons: Pokemon[] = [];
  querySubscription: Subscription;
  searchName: string;
  view: string = "gallery";

  constructor(private accountsService: AccountsService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.querySubscription = this.route.queryParams.subscribe(
      (queryParam: any) => {
        this.searchName = queryParam['name'];
        if (this.searchName) {
          this.pokemons = this.accountsService.filterByName(this.searchName);
        } else {
          this.pokemons = this.accountsService.getAll();
        }
      });
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
    // if (pokeName.length) {
    //   this.pokemons = this.accountsService.filterByName(pokeName);
    // } else {
    //   this.pokemons = this.accountsService.getAll();
    // }
    if (!pokeName) {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/'], { queryParams: { name: pokeName } });
    }
  }
}
