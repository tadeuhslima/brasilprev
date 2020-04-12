import { NgModule } from '@angular/core';
import { PokemonCardModule } from './pokemon-card/pokemon-card.module';
import { PokemonCardListModule } from './pokemon-card-list/pokemon-card-list.module';



@NgModule({
  imports: [
    PokemonCardModule,
    PokemonCardListModule
  ]
})

export class PokemonCardsModule {}
