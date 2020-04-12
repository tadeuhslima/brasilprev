
import { Component , Input } from '@angular/core';

@Component({
  selector: 'bp-pokemon-card',
  templateUrl: 'pokemon-card.component.html',
  styleUrls: ['pokemon-card.component.scss']

})

export class PokemonCardComponent {

  @Input() name = '';
  @Input() imageUrl = '';

}