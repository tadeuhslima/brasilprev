import { HttpClient , HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonCard } from './pokemon-card';


const API = 'https://api.pokemontcg.io/v1/cards?';

@Injectable({providedIn: 'root'})
export class PokemonCardService {
  constructor( private http: HttpClient) {}

  listPokemonCards(){
    return this.http
      .get<PokemonCard>(API)
  }

  listPokemonCardsPaginated(page: number){
    const params = new HttpParams()
      .append('page' , page.toString());
    return this.http
      .get<PokemonCard[]>(API , {params} );
  }
}
