import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PokemonProfileComponent } from './pokemon-profile/pokemon-profile.component';
import { EditInfoComponent } from './edit-info/edit-info.component';
import { CanDeactivateGuard } from './edit-info/can-deactivate-guard.service';

const appRoutes: Routes = [
  { path: 'pokemon-profile/:id', component: PokemonProfileComponent },
  { path: 'pokemon-profile/:id/edit', component: EditInfoComponent, pathMatch: 'full', canDeactivate: [CanDeactivateGuard] }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(appRoutes)
  ],
  exports: [RouterModule]
})
export class PokedexRoutingModule { }
