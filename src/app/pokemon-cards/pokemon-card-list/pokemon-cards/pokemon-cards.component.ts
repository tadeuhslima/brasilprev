import { Component, Input , OnChanges, SimpleChanges } from '@angular/core';
import { PokemonCard } from '../../pokemon-card/pokemon-card';
import { Router } from '@angular/router';

@Component({
  selector: 'bp-pokemon-cards',
  templateUrl: './pokemon-cards.component.html',
  styleUrls: ['./pokemon-cards.component.scss']
})
export class PokemonCardsComponent implements OnChanges {

  @Input() pokemonCards;
  rows: any[] = [];

  constructor( private router: Router) {}

  ngOnChanges(changes: SimpleChanges): void {

    console.log(this.pokemonCards)
    
    if (changes.pokemonCards) {
      this.rows = this.groupColumns(this.pokemonCards);
    }
  }


  groupColumns(pokemonCards: PokemonCard) {
    const newRows = [];

      for(let index = 0; index < pokemonCards.cards.length; index+=4) {
          newRows.push(pokemonCards.cards.slice(index, index + 4));
      }
      return newRows;
  }
}
