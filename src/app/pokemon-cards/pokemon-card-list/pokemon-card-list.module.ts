import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadButtonComponent } from './load-button/load-button.component';
import { SearchComponent } from './search/search.component';
import { FilterByName } from './filter-by-name.pipe';
import { PokemonCardsComponent } from './pokemon-cards/pokemon-cards.component';
import { PokemonCardListComponent } from './pokemon-card-list.component';
import { PokemonCardModule } from '../pokemon-card/pokemon-card.module';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { CursorPointerModule } from 'src/app/shared/directives/cursor-pointer-on-hover/cursor-pointer-on-hover.module';


@NgModule({
  declarations: [
    LoadButtonComponent,
    PokemonCardsComponent,
    FilterByName,
    PokemonCardListComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    PokemonCardModule,
    CardModule,
    CursorPointerModule
  ]
})
export class PokemonCardListModule {
}
