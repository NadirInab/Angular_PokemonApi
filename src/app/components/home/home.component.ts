import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pokemonData: any[] = [] ;
  currentId: number = 1;

  constructor(private pokemonService : PokemonService){}

  ngOnInit(): void {
    this.pokemonService.getPokemon().subscribe((data:any) => {
      // console.log(data) ;
      this.pokemonData = data.results ;
    }) 
  }

  getPokemonImage(): string {
    const id = this.currentId++;
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }
}
