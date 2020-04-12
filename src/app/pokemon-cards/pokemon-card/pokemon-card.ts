export interface PokemonCard {
  cards: [{
     id: string;
     name: string;
     nationalPokedexNumber: number;
     imageUrl: string;
     imageUrlHiRes: number;
     types:[{
       item: string;
     }];
     supertype: string;
     subtype: string;
     hp: string;
     retreatCost:[{
       item: string;
     }];
     convertedRetreatCost: number;
     number: string;
     artist: string;
     rarity: string;
     series: string;
     set: string;
     setCode: string;
    }
  ]

}
