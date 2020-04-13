import { Component, OnInit, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { PokemonCard } from '../pokemon-card/pokemon-card';
import { PokemonCardService } from '../pokemon-card/pokemon-card.service';


@Component({
  selector: 'app-card-list',
  templateUrl: './pokemon-card-list.component.html',
})

export class PokemonCardListComponent implements OnInit {

  pokemonCards: PokemonCard;
  filter: string = '';
  hasMore: boolean = true;
  currentPage: number = 1;


  constructor (
    private PokemonCardService: PokemonCardService
  ) {}

  ngOnInit(): void {
    this.PokemonCardService
      .listPokemonCards()
      .subscribe(res => {
        const sort: any =  res.cards.sort((a, b) => a.name.localeCompare(b.name))
        this.pokemonCards = {cards: sort};
      });
  }

  load(){
    this.PokemonCardService
    .listPokemonCardsPaginated(++this.currentPage)
    .subscribe(res => {
      this.filter = '';
      let result: any = '';
      Object.entries(res).forEach(([key, value]) => {
        result = { ...result , cards: value }
      });
      result = { cards : result.cards.concat(this.pokemonCards.cards)}
      const sort: any =  result.cards.sort((a, b) => a.name.localeCompare(b.name))
      this.pokemonCards = {cards: sort};

    });
  }

}
