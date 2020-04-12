import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { PokemonCard } from '../pokemon-card/pokemon-card';
import { PokemonCardService } from '../pokemon-card/pokemon-card.service';

@Injectable({providedIn: 'root'})
export class PokemonCardListResolver implements Resolve<Observable<PokemonCard[]>> {

  constructor(private service: PokemonCardService){}

  resolve(route: ActivatedRouteSnapshot , state: RouterStateSnapshot) {
    return this.service.listPokemonCards();
  }

}
