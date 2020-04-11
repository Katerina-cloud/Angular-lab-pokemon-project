import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PokemonProfileComponent } from './pokemon-profile/pokemon-profile.component';

const appRoutes: Routes = [
  { path: 'pokemon-profile/:id', component: PokemonProfileComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(appRoutes)
  ],
  exports: [RouterModule]
})
export class PokedexRoutingModule { }
