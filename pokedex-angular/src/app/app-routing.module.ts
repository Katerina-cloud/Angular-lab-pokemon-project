import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PokemonsPageComponent } from './pokedex/pokemons-page/pokemons-page.component';

const appRoutes: Routes = [
  { path: '', component: PokemonsPageComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
