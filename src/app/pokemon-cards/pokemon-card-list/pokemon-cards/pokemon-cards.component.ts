import { Component, Input , OnChanges, SimpleChanges, ɵConsole } from '@angular/core';
import { PokemonCard } from '../../pokemon-card/pokemon-card';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.services';


@Component({
  selector: 'bp-pokemon-cards',
  templateUrl: './pokemon-cards.component.html',
  styleUrls: ['./pokemon-cards.component.scss']
})
export class PokemonCardsComponent implements OnChanges {

  @Input() pokemonCards;
  rows: any[] = [];
  message:string;

  constructor(
    private router: Router,
    private data: DataService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
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

  details(pokemon){
    this.data.changeMessage(pokemon)
    this.router.navigate(['/pokemon/' + pokemon.name]);
  }

}
