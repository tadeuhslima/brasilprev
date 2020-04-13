import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { PokemonCardListComponent } from './pokemon-cards/pokemon-card-list/pokemon-card-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pokemon'
  },
  {
    path: 'pokemon',
    component: PokemonCardListComponent,
  },
  {
    path: 'pokemon/:pokemonName',
    component: PokemonDetailsComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})

export class AppRoutingModule { }