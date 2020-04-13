import { Pipe , PipeTransform} from '@angular/core';
import { PokemonCard } from '../pokemon-card/pokemon-card';


// tslint:disable-next-line: use-pipe-transform-interface
@Pipe({ name: 'filterByName' })
export class FilterByName {

  transform(pokemonCards: PokemonCard , desciptionQuery: string) {
    desciptionQuery = desciptionQuery
      .trim()
      .toLowerCase()
      // tslint:disable-next-line: align
      if(desciptionQuery){
        const filtered: any = [];
        const filter: any =  pokemonCards.cards.filter(
          pokemonCard => pokemonCard.name.toLowerCase().includes(desciptionQuery)
        );
        filtered.push({cards: filter})
        pokemonCards = filtered[0];
        return pokemonCards;
      } else {
        return pokemonCards;
      }
  }

}
