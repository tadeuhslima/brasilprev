import { Component, OnInit, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { PokemonCard, Cards } from '../pokemon-card/pokemon-card';
import { PokemonCardService } from '../pokemon-card/pokemon-card.service';


@Component({
  selector: 'app-card-list',
  templateUrl: './pokemon-card-list.component.html',
})

export class PokemonCardListComponent implements OnInit {

  pokemonCards: PokemonCard[] = [];
  cards: Cards[] = [];
  filter: string = '';
  hasMore: boolean = true;
  currentPage: number = 1;

  constructor (
    private PokemonCardService: PokemonCardService
  ) {}

  ngOnInit(): void {
    // this.PokemonCardService
    //   .listPokemonCards()
    //   .subscribe(pokemonCards => {
    //     this.pokemonCards = pokemonCards.cards;
    //     pokemonCards.cards.sort((a, b) => a.name.localeCompare(b.name));
    //   });
  }

  load(){
  //   console.log('teste')
  //   this.PokemonCardService
  //     .listPokemonCardsPaginated(++this.currentPage)
  //     .subscribe(pokemonCards => {
  //       this.filter = '';
  //       this.pokemonCards = this.pokemonCards.concat(pokemonCards.cards);
  //       if (!this.pokemonCards.length) {
  //         this.hasMore = false;
  //       }
  //     });
  }

}
