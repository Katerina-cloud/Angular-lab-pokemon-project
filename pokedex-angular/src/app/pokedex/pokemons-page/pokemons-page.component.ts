import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../types/Pokemon';
import { AccountsService } from '../accounts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemons-page',
  templateUrl: './pokemons-page.component.html',
  styleUrls: ['./pokemons-page.component.scss']
})
export class PokemonsPageComponent implements OnInit {
  pokemons: Pokemon[] = [];
  querySubscription: Subscription;
  searchName: string;
  view = "gallery";
  galleryActive = true;
  listActive = false;

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
    if (viewType === "gallery") {
      this.galleryActive = true;
      this.listActive = false;
    } else if (viewType === "list") {
      this.galleryActive = false;
      this.listActive = true;
    }
  }

  pokemonPageCatchOnClick(pokemon: Pokemon): void {
    pokemon.isCaught = !pokemon.isCaught;
    const status: string = pokemon.isCaught ? "caught" : "released";
    console.log(`Pokemon ${pokemon.name} was ${status}`);
  }

  pokemonPageSearchOnClick(pokeName: string): void {
    if (!pokeName) {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/'], { queryParams: { name: pokeName } });
    }
  }
}
