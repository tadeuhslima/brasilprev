import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { PokemonCardListComponent } from './pokemon-cards/pokemon-card-list/pokemon-card-list.component';
import { PokemonCardListResolver } from './pokemon-cards/pokemon-card-list/pokemon-card-list.resolver';
import { NotFoundComponent } from './errors/not-found/not-found.component';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pokemon'
  },
  {
    path: 'pokemon',
    component: PokemonCardListComponent,
    // resolve: {
    //   PokemonCards: PokemonCardListResolver
    // },
  },
  // {
  //   path: '/:pokemonName',
  //   component: PokemonDetailComponent,
  // },
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