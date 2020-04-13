import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../shared/services/data.services';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  @Input() pokemonDetail;
  message:string;

  constructor(
    private data: DataService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message)
    this.pokemonDetail = this.message;
  }

  goBack(){
    this.router.navigate(['/']);
  }

}
