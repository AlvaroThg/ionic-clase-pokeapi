import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonList, IonCard} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Pokemon } from '../interfaces/pokemon.interface';
import { PokemonService } from '../services/pokemon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, CommonModule, IonItem, IonLabel, IonList, IonCard],
})
export class Tab1Page implements OnInit{
  pokemonList:Pokemon[] = [];
  constructor(private pokemonService:PokemonService) {}
  ngOnInit() {  
 
    this.loadPokemonList();
  } 
  loadPokemonList() { 
    this.pokemonService.getPokemonList().subscribe((response) => {
      this.pokemonList = response;
    });
  }
}
