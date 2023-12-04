import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http" ;
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  private pokeUrl = 'https://pokeapi.co/api/v2/' ;

  constructor(private http: HttpClient) { }

  getPokemon(): Observable<any> {
    return this.http.get(`${this.pokeUrl}pokemon?limit=30`)
  }
}
